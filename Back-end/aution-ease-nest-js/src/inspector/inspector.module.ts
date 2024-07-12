import { Module } from '@nestjs/common';
import { InspectorController } from './inspector.controller';
import { InspectorsService } from './inspector.service';

@Module({
  controllers: [InspectorController],
  providers: [InspectorsService],
})
export class InspectorsModule {}
