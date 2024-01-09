import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Tarefas1704810426699 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tasks',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'task',
                    type: 'text'
                },
                {
                    name: 'deadline',
                    type: 'date'
                },
                {
                    name: 'status',
                    type: 'text'
                },
                {
                    name: 'user_id',
                    type: 'integer'
                }
            ]
        }))

        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedTableName: 'users',
                referencedColumnNames: ['id']
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tasks')
    }

}
