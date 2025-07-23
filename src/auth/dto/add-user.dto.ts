import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsOptional()
  id?: number;

  @IsEmail()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  verification_token?: string;

  @IsOptional()
  @IsBoolean()
  is_verified?: boolean;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  created_at?: Date;
}
