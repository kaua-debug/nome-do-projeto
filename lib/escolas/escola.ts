'use server'
import { pool } from "@/lib/db"
export async function addEscola(nome: string, endereco: string, quantidade_de_alunos: string, telefone: string) {
    await pool.query(`insert into escolas (nome, endereco, quantidade_alunos, telefone) values ('${nome}', '${endereco}', '${quantidade_de_alunos}', '${telefone}')`)
}