import { CaretRight, FileArrowDown } from 'phosphor-react';
import react from 'react'

interface style {
    variant: string;
}

export function Extra(props: style) {
    function returnVariant () {
        if (props.variant == 'material') {
            return (
                <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 h-full px-6 py-12">
                        <FileArrowDown size={39} />
                    </div>
                    <div className="py-6">
                        <h1 className="text-2xl text-gray-100 font-bold mb-2">
                            Material complementar
                        </h1>
                        <span className="text-sm text-gray-200 leading-relaxed">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                        </span>
                    </div>
                    <div className="py-[55px] px-6 flex items-center justify-center text-blue-500">
                        <CaretRight size={24}/>
                    </div>
                </a>
            )
        }
        return (
            <h1>teste</h1>
        )
    }
    return (
        returnVariant()
    )
}