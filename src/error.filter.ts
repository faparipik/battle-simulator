import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as apm from 'elastic-apm-node';

interface responseJsonInterface {
  statusCode: number;
  timestamp: string;
  path: string;
  message?: any;
}

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let responseJson: responseJsonInterface = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    // Validation Error
    if (exception.response && exception.response.statusCode === 400) {
      const { statusCode, message } = exception.response;
      responseJson = {
        ...responseJson,
        statusCode,
        message,
      };
    }

    apm.captureError(exception, {
      request,
      response,
    });

    response.status(status).json(responseJson);
  }
}
