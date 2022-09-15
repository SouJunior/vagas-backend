import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRepository } from '../jobs/repository/job.resository';
import { UserRepository } from '../user/repository/user.repository';
import { ReportsController } from './reports.controller';
import { ReportRepository } from './repository/reports.repository';
import { CreateReportService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportRepository, UserRepository, JobRepository]),
  ],
  controllers: [ReportsController],
  providers: [CreateReportService],
})
export class ReportsModule {}
