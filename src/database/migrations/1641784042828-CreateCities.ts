import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCities1641784042828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cities",
                columns: [
                    {
                       name: "id",
                       type: "varchar",
                       isPrimary: true 
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "uf",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cities");
    }
    
}
