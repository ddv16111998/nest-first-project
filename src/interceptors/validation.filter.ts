import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(HttpException)
export class ValidationFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    ctx.getRequest();
    if (exception instanceof HttpException && exception.getStatus() === 400) {
      const errors = exception.getResponse()['message'];
      // Customize the response format
      const formattedErrors = errors.map((errorString: string) => {
        const firstSpaceIndex = errorString.indexOf(' ');
        const attribute = errorString.slice(0, firstSpaceIndex);
        const message = errorString.slice(firstSpaceIndex + 1);
        return { attribute, message };
      });

      response.status(400).json({
        status: 400,
        errors: formattedErrors,
      });
    } else {
      super.catch(exception, host);
    }
  }
}
