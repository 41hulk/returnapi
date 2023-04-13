import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  telephone: string;

  @Column()
  isActive: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: string;
}
