'use server'
import { pool } from "../db"
export async function addProfessor(nome: string, endereco: string, especialidade: string, telefone: string, email: string) {
    await pool.query(`insert into professores (nome, endereco, especialidade, telefone, email
        
        ) values (
         
        $1,
        $2, 
        $3,
        $4,
        $5
        
        )`,
    [
         nome, 
         endereco,
         especialidade, 
         telefone,
         email
    ])
}