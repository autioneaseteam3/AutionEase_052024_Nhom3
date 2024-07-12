import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessControlService } from 'src/shared/access-control.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private accessControlService: AccessControlService,
  ) {}

  canActivate(context: ExecutionContext) {
    const isPublicRouteMeta = this.reflector.getAllAndOverride(
      'isPublicRoute',
      [context.getHandler(), context.getClass()],
    );

    if (isPublicRouteMeta) return false;

    const roleMeta = this.reflector.getAllAndOverride('role', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roleMeta) return false;

    // * don't implement auth yet so we can make it to role of user just for test it work or not
    const currentRole =
      context.switchToHttp().getRequest()?.user?.role || 'user';

    return this.accessControlService.isAuthorized(currentRole, roleMeta);
  }
}
