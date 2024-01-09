import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Usuarios1704485123795 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'text'
                },
                {
                    name: 'email',
                    type: 'text',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'text'
                }
            ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
