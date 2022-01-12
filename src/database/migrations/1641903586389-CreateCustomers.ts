import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustomers1641903586389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "customers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "fullName",
                        type: "varchar"
                    },
                    {
                        name: "gender",
                        type: "varchar"
                    },
                    {
                        name: "birth",
                        type: "timestamp"
                    },
                    {
                        name: "age",
                        type: "numeric"
                    },
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers");
    }

}
