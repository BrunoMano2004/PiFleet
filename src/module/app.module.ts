import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { KubernetesService } from 'src/service/kubernetes.service';
import { CliService } from 'src/service/cli.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, KubernetesService, CliService],
})
export class AppModule {}
