'use client'

import { useState } from "react"
import { addCasa } from "@/lib/casas/casa"

export default function Page() {
    const [tipo, setTipo] = useState('tipo')
    const [endereco, setEndereco] = useState('endereco')
    const [areaTerreno, setAreaTerreno] = useState(0)
    const [areaConstruida, setAreaConstruida] = useState(0)
    const [quartos, setQuartos] = useState(0)
    const [banheiros, setBanheiros] = useState(0)
    const [edicula, setEdicula] = useState(false)
    const [churrasqueira, setChurrasqueira] = useState(false)
    const [piscina, setPiscina] = useState(false)
    const [valorCondominio, setValorCondominio] = useState(0)
    const [precoVenda, setPrecoVenda] = useState(0)

    const handlSubmit = (event: any) => {
        event.preventDefault()
        addCasa(tipo, endereco, areaTerreno, areaConstruida, quartos, banheiros, edicula, churrasqueira, piscina, valorCondominio, precoVenda)
    }

    return (
        <form onSubmit={handlSubmit}>
            <div className="spcae-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Casas</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informaçoes sobre a casa</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <input type="text" value={tipo} onChange={(event:any) => setTipo(event.target.value)} name="first-name" id="tipo" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="endereço" className="block text-sm/6 font-medium text-gray-900">endereço</label>
                        <div className="mt-2">
                            <input type="text" value={endereco} onChange={(event: any) => setEndereco(event.target.value)} name="first-name" id="endereco" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="area_terreno" className="block text-sm/6 font-medium text-gray-900">area terreno</label>
                        <div className="mt-2">
                            <input type="number" value={areaTerreno} onChange={(event: any) => setAreaTerreno(event.target.value)} name="first-name" id="area_terreno" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="area_construida" className="block text-sm/6 font-medium text-gray-900">area construida</label>
                        <div className="mt-2">
                            <input type="number" value={areaConstruida} onChange={(event: any) => setAreaConstruida(event.target.value)} name="first-name" id="areaConstruida" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="quartos" className="block text-sm/6 font-medium text-gray-900">quartos</label>
                        <div className="mt-2">
                            <input type="number" value={quartos} onChange={(event:any) => setQuartos(event.target.value)} name="first-name" id="quartos" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="banheiros" className="block text-sm/6 font-medium text-gray-900">Banheiros</label>
                        <div className="mt-2">
                            <input type="number" value={banheiros} onChange={(event) => setBanheiros(event.target.value)} name="first-name" id="banheiros" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="edicula" className="block text-sm/6 font-medium text-gray-900">edicula</label>
                        <div className="mt-2">
                            <input type="checbox" checked={edicula} onChange={(event) => setEdicula(event.target.checked)} name="first-name" id="edeicula" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="churrasqueira" className="block text-sm/6 font-medium text-gray-900">Churrasqueira</label>
                        <div className="mt-2">
                            <input type="checkbox" checked ={churrasqueira} onChange={(event) => setChurrasqueira(event.target.checked)} name="first-name" id="condominio" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="piscina" className="block text-sm/6 font-medium text-gray-900">piscina</label>
                        <div className="mt-2">
                            <input type="checkbox" checked={piscina} onChange={(event) => setPiscina(event.target.checked)} name="first-name" id="condominio" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="valor_condominio" className="block text-sm/6 font-medium text-gray-900">Valor condominio</label>
                        <div className="mt-2">
                            <input type="number" value={valorCondominio} onChange={(event) => setValorCondominio(event.target.value)} name="first-name" id="valor_condominio" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="preço_venda" className="block text-sm/6 font-medium text-gray-900">Preço venda</label>
                        <div className="mt-2">
                            <input type="number" value={precoVenda} onChange={(event) => setPrecoVenda(event.target.value)} name="first-name" id="preco_venda" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
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