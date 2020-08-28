import { User } from "../entity/User";
import {getRepository, MigrationInterface, QueryRunner} from "typeorm";

export class CreateAdminUser1598546549152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const user = new User();
        user.id = 1;
        user.username = "admin";
        user.password = "admin";
        user.hashPassword();
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return;
    }

}