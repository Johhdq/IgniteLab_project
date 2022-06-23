import { DiscordLogo, Lightning } from 'phosphor-react'


export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">

                </div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Aula 01 - Abertura do Ignite Lab
                        </h1>
                        <p className="text-gray-300 mt-4">
                            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                        </p>
                    </div>
                    <div className="flex-col gap-4">
                        <a href="#" className="rounded border border-green-500 bg-green-500 px-6 py-4 flex items-center gap-[10px]">
                            <DiscordLogo size={24}/>
                            <span className="text-sm font-bold text-white">COMUNIDADE NO DISCORD</span>
                        </a>
                        <a href="#" className="rounded border border-blue-500 px-6 py-4 flex items-center justify-center gap-[10px] mt-4">
                            <Lightning size={24} color="#81D8F7"/>
                            <span className="text-sm font-bold text-blue-500">ACESSE O DESAFIO</span>
                        </a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}