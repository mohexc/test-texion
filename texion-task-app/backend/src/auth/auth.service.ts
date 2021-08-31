import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDTO } from './dto/signin-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService

  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    const isMatch = await bcrypt.compare(password, user.password)
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto)
  }


  async getProfile(username: string) {
    const user = await this.userService.findOneByUsername(username);
    const { password, ...result } = user;
    return result
  }


}
