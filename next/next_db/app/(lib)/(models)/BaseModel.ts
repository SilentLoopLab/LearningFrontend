import { pool } from "../config";

export abstract class BaseModel {
    abstract tableName: string;

    async findAll() {
        const [rows] = await pool.execute(`SELECT * FROM ${this.tableName}`);
        return rows;
    }
    async findWhere() {

    }
    async findByPk(id:number) {

    }
    async insert() {

    }
    async update() {

    }
}