import { Label } from "./Label";

interface InputProps {
    placeHolder: string;
    id: string;
    labelText: string;
    type?: string;
    styleDiv?: string;
    styleInput?: string;
    styleLabel?: string;
}

export function Input(props: InputProps) {
    const { placeHolder, id, labelText, type, styleDiv, styleInput, styleLabel } = props;

    return (
        <div className={"flex flex-row items-end " + styleDiv}>
            <Label text={labelText} htmlForID={id} styleLabel={styleLabel} />
            <input id={id} type={type} placeholder={placeHolder} className={".placeholder-text-black w-60 " + styleInput} />
        </div>

    )
}