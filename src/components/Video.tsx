import { DiscordLogo, Lightning, FileArrowDown, CaretRight, Image } from 'phosphor-react'
import { Button } from './Button'

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
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <img 
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src="https://avatars.githubusercontent.com/u/91682867?v=4"
                                alt=""
                            />
                            <div className="leading-relaxed">
                                <strong className="text-2xl text-gray-100 block">Teste</strong>
                                <span className="text-sm text-gray-200 block">Aprendendo React</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {/* <Button 
                            Icon={DiscordLogo}
                            description="Comunidade do Discord"
                            hover="hover:bg-green-700"
                            txtColor="text-white"
                            bgColor="bg-green-500"
                        />
                        <Button 
                            Icon={Lightning}
                            description="Acesse o Desafio"
                            hover="hover:bg-blue-500"
                            txtColor="text-blue-500"
                            borderColor="border-blue-500"
                            hoverText="hover:text-gray-900"
                        /> */}
                        <a href="#" className="text-sm rounded font-bold uppercase text-white bg-green-500 p-4 flex items-center gap-[10px] justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>
                        <a href="#" className="p-4 text-sm rounded uppercase border border-solid font-bold text-blue-500 border-blue-500 flex items-center justify-center gap-[10px] hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o Desafio
                        </a>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full px-6 py-12 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl text-gray-100">
                                Material complementar
                            </strong>
                            <p className="text-sm text-gray-200 leading-relaxed mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="py-[55px] px-6 flex items-center justify-center text-blue-500">
                            <CaretRight size={24}/>
                        </div>
                    </a>
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full px-6 py-12 flex items-center">
                            <Image size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl text-gray-100">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm text-gray-200 leading-relaxed mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="py-[55px] px-6 flex items-center justify-center h-full text-blue-500">
                            <CaretRight size={24}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}