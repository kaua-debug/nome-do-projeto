'use client'

    
import { useState } from "react";
import { addCasaOracao } from "@/lib/casa_de_oracao/casa_de_oracao";

export default function Page() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [anciao, setAnciao] = useState('');
    const [telefoneAnciao, setTelefoneAnciao] = useState(0);
    const [cooperador, setCooperador] = useState('');
    const [telefoneCooperador, setTelefoneCooperador] = useState(0);
    const [cooperadorJovens, setCooperadorJovens] = useState('');
    const [telefoneCooperadorJovens, setTelefoneCooperadorJovens] = useState(0);
    const [diacono, setDiacono] = useState('');
    const [telefoneDiacono, setTelefoneDiacono] = useState(0);
    const [ultimaSantaCeia, setUltimaSantaCeia] = useState(0);

    const handleSubmit = (event:any) => {
        event.preventDefault();
        addCasaOracao(
            nome,
            endereco,
            anciao,
            telefoneAnciao,
            cooperador,
            telefoneCooperador,
            cooperadorJovens,
            telefoneCooperadorJovens,
            diacono,
            telefoneDiacono,
            ultimaSantaCeia
        );
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Cadastro de Casa de Oração</h2>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-4">
                    <label className="block text-sm font-medium text-gray-900">Nome</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-900">Nro. Sta. Ceia</label>
                    <input type="number" value={ultimaSantaCeia} onChange={(e) => setUltimaSantaCeia(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-5">
                    <label className="block text-sm font-medium text-gray-900">Endereço</label>
                    <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>

            </div>

            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-900">Ancião</label>
                <input type="text" value={anciao} onChange={(e) => setAnciao(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-900">Telefone Ancião</label>
                    <input type="text" value={telefoneAnciao} onChange={(e) => setTelefoneAnciao(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-900">Cooperador</label>
                    <input type="text" value={cooperador} onChange={(e) => setCooperador(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-900">Telefone Cooperador</label>
                    <input type="text" value={telefoneCooperador} onChange={(e) => setTelefoneCooperador(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-900">Diácono</label>
                    <input type="text" value={diacono} onChange={(e) => setDiacono(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />  
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-900">Telefone Diácono</label>
                    <input type="text" value={telefoneDiacono} onChange={(e) => setTelefoneDiacono(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-900">Cooperador de Jovens</label>
                    <input type="text" value={cooperadorJovens} onChange={(e) => setCooperadorJovens(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-900">Telefone Cooperador de Jovens</label>
                    <input type="text" value={telefoneCooperadorJovens} onChange={(e) => setTelefoneCooperadorJovens(e.target.value)} className="w-full rounded-md border-gray-300 px-3 py-1.5" />  
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold text-gray-900">Cancelar</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Salvar</button>
            </div>
        </form>

    );
}