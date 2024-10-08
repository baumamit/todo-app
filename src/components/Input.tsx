interface InputProps {
    placeHolder: string;
    type?: string;
    className?: string;
    id?: string;
    labelText?: string;
}

export function Input(props: InputProps) {
    const { placeHolder, type, className, id, labelText } = props;

    return (
        <div className="flex flex-row">
            <label htmlFor={id} className="mx-10">{labelText}
            </label>
            <input id={id} type={type} placeholder={placeHolder} className={".placeholder-text-black bg-slate-200 w-60 " + className} />
        </div>

    )
}