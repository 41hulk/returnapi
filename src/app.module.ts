import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.prod',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: (process.env.DB_TYPE as any) || 'postgres',
      host: process.env.PG_HOST || 'localhost',
      port: parseInt(process.env.PGPORT) || 5430,
      username: process.env.PGUSER || 'root',
      password: process.env.PGPASSWORD || 'root@123',
      database: process.env.PGDATABASE || 'r3_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    }),
    TypeOrmModule.forFeature([]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
