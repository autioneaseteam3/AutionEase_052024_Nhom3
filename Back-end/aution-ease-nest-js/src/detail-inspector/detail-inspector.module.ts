import { Module } from '@nestjs/common';

import { DetailInspectorService } from './detail-inspector.service';
import { DetailInspectorController } from './detail-inspector.controller';

@Module({
  providers: [DetailInspectorService],
  controllers: [DetailInspectorController],
})
export class DetailInspectorModule {}
