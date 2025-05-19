import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  getHello() {
    const filePath = join(__dirname, '..', 'src', 'public', 'index.html');
    return readFileSync(filePath, 'utf8');
  }
}
