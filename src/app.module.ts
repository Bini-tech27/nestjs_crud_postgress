import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [
    UsersModule,
    ConfigModule.forRoot({  envFilePath: '.development.env',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT, 10)  || 5432,
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database:process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  
})
export class AppModule {}
