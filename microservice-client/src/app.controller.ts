import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './app.interface';

@Controller()
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get()
  getHello() {
    this.client.emit<Message>('message_printed', { message: 'Hello World!' });
    return 'Hello World Will be Printed';
  }
}
