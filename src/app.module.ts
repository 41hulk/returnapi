import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { UserEntity } from './entity/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.prod',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      // url: process.env.DATABASE_URL,
      type: 'postgres' || (process.env.DB_TYPE as any),
      host: 'localhost' || process.env.PG_HOST,
      port: 5430 || parseInt(process.env.PGPORT),
      username: 'root' || process.env.PGUSER,
      password: 'root@123' || process.env.PGPASSWORD,
      database: 'r3_db' || process.env.PGDATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
