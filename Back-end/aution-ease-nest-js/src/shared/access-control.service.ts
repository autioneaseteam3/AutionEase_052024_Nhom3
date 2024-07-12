import { Injectable } from '@nestjs/common';
import { ERole } from 'src/common/enums';

@Injectable()
export class AccessControlService {
  hierarchies: Array<Map<string, number>> = [];
  priority: number = 1;
  constructor() {
    this.buildRoles(
      ERole.USER,
      ERole.ADMIN,
      ERole.MANAGER,
      ERole.SUPPLIER,
      ERole.INSPECTOR,
    );
  }

  buildRoles(...roles: ERole[]) {
    let hierarchy: Map<string, number>;

    roles.forEach((role) => {
      hierarchy = new Map();
      hierarchy.set(role, this.priority);

      this.hierarchies.push(hierarchy);
      this.priority++;
    });
  }

  isAuthorized(currentRole: ERole, requiredRole: ERole) {
    let priorityCurRole = 1;
    let priorityReqRole = 1;

    this.hierarchies.forEach((hir) => {
      if (hir.get(currentRole)) priorityCurRole = hir.get(currentRole);
      if (hir.get(requiredRole)) priorityReqRole = hir.get(requiredRole);
    });

    if (!priorityCurRole) return false;

    if (priorityCurRole >= priorityReqRole) return true;

    return false;
  }
}
