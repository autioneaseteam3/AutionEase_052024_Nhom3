import { SetMetadata } from '@nestjs/common';
import { ERole } from '../enums';

export const Role = (role: ERole) => SetMetadata('role', role);
