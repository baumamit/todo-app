interface ButtonProps {
    content: string
}

export function Button(props: ButtonProps) {
    const { content } = props;
    return (
        <button className="px-4 pv-2 bg-red-800 text-zinc-300 w-60">{content}</button>
    )
}