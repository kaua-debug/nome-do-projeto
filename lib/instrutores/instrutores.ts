'use server'
import { pool } from "../db"
export async function addInstrutores(nome: string, especialidade: string, data_nascimento: string, endereco: string, comum: string) {
    await pool.query(`insert into instrutores(nome, especialidade, data_nascimento, endereco, comum) values ('${nome}', '${especialidade}', '${data_nascimento}', '${endereco}', '${comum}')`)
}