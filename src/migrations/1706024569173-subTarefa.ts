import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class SubTarefa1706024569173 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'subTasks',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'subTask',
                    type: 'text'
                },
                {
                    name: 'task_id',
                    type: 'integer'
                }
            ]
        }))

        await queryRunner.createForeignKey('subTasks',
            new TableForeignKey({
                columnNames: ['task_id'],
                referencedTableName: 'tasks',
                referencedColumnNames: ['id']
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subTasks')
    }

}
