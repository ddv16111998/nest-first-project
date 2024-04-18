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
        const firstSpaceIndex = errorString.indexOf(' '); // Tìm vị trí của dấu cách đầu tiên trong chuỗi
        const attribute = errorString.slice(0, firstSpaceIndex); // Lấy phần từ đầu tiên từ đầu chuỗi đến dấu cách đầu tiên
        const message = errorString.slice(firstSpaceIndex + 1); // Lấy phần còn lại của chuỗi sau dấu cách đầu tiên
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
