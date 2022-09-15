import { Injectable, BadRequestException } from '@nestjs/common';
import { JobRepository } from 'src/modules/jobs/repository/job.resository';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { CreateReportDto } from '../dtos/create-report.dto';
import { ReportRepository } from '../repository/reports.repository';

@Injectable()
export class CreateReportService {
  constructor(
    private reportRepository: ReportRepository,
    private userRepository: UserRepository,
    private jobRepository: JobRepository,
  ) {}

  async execute({ user_id, job_id, description }: CreateReportDto) {
    const userExists = await this.userRepository.findOneById(user_id);

    if (!userExists) {
      throw new BadRequestException('User not found');
    }

    const jobExists = await this.jobRepository.findOneById(job_id);

    if (!jobExists) {
      throw new BadRequestException('Job not found');
    }

    const response = await this.reportRepository.createReport({
      user_id,
      job_id,
      description,
    });

    return response;
  }
}
