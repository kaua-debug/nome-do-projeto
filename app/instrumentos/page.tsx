'use client'

import { useState } from "react"
import { addInstrumento } from "@/lib/instrumentos/instrumentos"

export default function Page() {
    const [nome, setNome] = useState('nome')
    const [tipo, setTipo] = useState('')
    const handlSubmit = (event: any) => {
        event.preventDefault()
        addInstrumento( nome, tipo)
    }

    return (
        <form onSubmit={handlSubmit}>
            <div className="spcae-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">instrumentos</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informaçoes dos</p>
                </div> instrumento

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Nome do Instrumento</label>
                        <div className="mt-2">
                            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} name="first-name" id="instrumento" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="tipo_instrumento" className="block text-sm/6 font-medium text-gray-900">Tipo</label>
                        <div className="mt-2">
                            <select name="tipo_instrumento" id="tipo_instrumento" onChange={(event) => setTipo(event.target.value)}>

                                <option value="metais">metais</option>
                                <option value="madeiras">madeiras</option>
                                <option value="cordas">cordas</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    )
}