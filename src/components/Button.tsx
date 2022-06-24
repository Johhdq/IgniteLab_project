import Icones from 'phosphor-react'

interface style {
    Icon: typeof Icones.Activity;
    description: string;
    bgColor?: string;
    borderColor?: string;
    hover: string;
    txtColor: string;
    hoverText?: string
}

export function Button(props: style) {
    return (
        <a href="#" className={`text-sm rounded font-bold uppercase ${props.borderColor ? "border border-solid " + props.hoverText + " " + props.borderColor  : ""} ${props.txtColor} ${props.bgColor} p-4 flex items-center gap-[10px] justify-center ${props.hover} transition-colors`}>
           <props.Icon size={24} />
            {props.description}
        </a>
    )
}