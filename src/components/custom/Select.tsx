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

            <input type="range" id={id} name={labelText} min="0" max="2" step="1"
                className={"[transform:rotate(270deg)] " + styleSelect} list="values" />

            <datalist id={id} className={"flex flex-col justify-between w-52 " + styleSelect} >
                {options.map((option, index) => {
                    return <option key={option + index} value={index} label={option} >{option}</option>
                })}
            </datalist>

            {/* <select name={labelText} id={id} className={" "+styleSelect}>
                {options.map((option,index) => {
                    return <option key={option+index} value={option}>{option}</option>
                })}
            </select> */}

        </div>
    )
}