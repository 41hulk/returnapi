import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userModel: Repository<UserEntity>,
  ) {}
  async CreateUser(name: string, telephone: string, address: string) {
    const created = this.userModel.create({
      name: name,
      telephone: telephone,
      address: address,
      isActive: false,
    });

    return await this.userModel
      .save(created)
      .then((res) => {
        return { data: res, error: null };
      })
      .catch((err) => {
        console.log('Error creating user: ' + err.toString());
        return { data: null, error: err };
      });
  }
}
