import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

// Vão ser as informações variáveis que podem mudar para este componente (Lesson)
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    // isPast é uma função do date-fns que verifica se uma data passada por parâmetro está no passado ou não
    const isLessonAvailable = isPast(props.availableAt);
    // format para formatar a data
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    return (
        <a href="#">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em breve
                        </span>
                    )}

                    <span className="text-xs rounded border py-[2px] px-2 border-green-300 text-green-300 font-bold">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                
                <strong className="text-gray-200 mt-4 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}