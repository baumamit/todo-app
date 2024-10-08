interface ButtonProps {
    content: string;
    styleButton?: string;
}

export function Button(props: ButtonProps) {
    const { content, styleButton } = props;
    return (
        <button className={"px-4 pv-2 bg-red-800 text-zinc-300 hover:bg-orange-600 hover:text-gray-900 font-bold " + styleButton}>{content}</button>
    )
}