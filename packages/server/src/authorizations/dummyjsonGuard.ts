import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { SetMetadata } from "@nestjs/common";

@Injectable()
export class AuthGuardDummyJson implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get<string[]>("roles", context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(user, roles);
  }

  matchRoles(user: any, roles: string[]) {
    return true;
    // return roles.some(user.role) ? true : false;
  }
}

export const DummyJsonRoles = (...roles: string[]) =>
  SetMetadata("roles", roles);
