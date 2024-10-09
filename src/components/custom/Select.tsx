import { Label } from "./Label";

interface SelectProps {
    labelText: string;
    id: string;
    options: string[];
    styleDiv?: string;
    styleSelect?: string;
    styleLabel?: string;
}

export const Select = (props: SelectProps) => {
    const { labelText, id, options, styleDiv, styleSelect, styleLabel } = props;
    return (
        <div className={"flex flex-row " + styleDiv}>
            <Label text={labelText} htmlForID={id} styleLabel={styleLabel} />

            <select name={labelText} id={id} className={" "+styleSelect}>
                {options.map((option,index) => {
                    return <option key={option+index} value={option}>{option}</option>
                })}
            </select>

        </div>
    )
}