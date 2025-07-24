import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'prisma/prisma.service';
import Lang from '../lang/lang';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => request?.cookies?.jwt,
      ]),
      secretOrKey: process.env.JWT_SECRET || 'ugbff00TxyqwAmcOFzIyMfoZ',
    });
  }

  async validate(payload: { id: number }) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
      include: { country:true },
    });
    if (!user) {
      throw new UnauthorizedException(Lang.user_not_found_message);
    }
    return user;
  }
}
