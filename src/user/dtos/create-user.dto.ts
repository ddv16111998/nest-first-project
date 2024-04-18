import { IsNotEmpty, IsString, Matches, Validate } from 'class-validator';
import { MatchesPropertyConstraint } from '../../interceptors/matches-property';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,})$/, {
    message: 'password too weak',
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @Validate(MatchesPropertyConstraint, ['password'], {
    message: 'password_confirmation do not match',
  })
  password_confirmation: string;
}
