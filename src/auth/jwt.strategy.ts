// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Ensure that expired tokens are rejected
      secretOrKey: process.env.JWT_SECRET, // Replace with your JWT secret
    });
  }

  async validate(payload: any) {
    // This will attach the user information to the request object
    return { userId: payload.sub, email: payload.email };
  }
}
