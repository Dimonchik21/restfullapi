import { MigrationInterface, QueryRunner, getRepository, Table } from 'typeorm';
import { idText } from 'typescript';
import { User } from '../entity/User';

export class CreateTableUser1598545646384 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userRepository = getRepository(User);
        await queryRunner.createTable(new Table({
            name: userRepository.metadata.tableName,
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    isUnique: true,
                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "createdAt",
                    type: "date",
                    isGenerated: true,
                },
                {
                    name: "updatedAt",
                    type: "date",
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return;
    }

}
