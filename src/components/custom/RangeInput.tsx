import { Label } from "./Label";

interface SelectProps {
    labelText: string;
    id: string;
    options: string[];
    styleDiv?: string;
    styleDatalist?: string;
    styleLabel?: string;
    styleRangeInput?: string;
}

export const RangeInput = (props: SelectProps) => {
    const { labelText, id, options, styleDiv, styleDatalist, styleLabel, styleRangeInput } = props;
    return (
        <div className={"flex flex-row " + " " + styleDiv}>
        <Label text={labelText} htmlForID={id} styleLabel={styleLabel} />
        
        <div>
            <input type="range" id={id} name={labelText} min="0" max="2" step="1"
            className={"appearance-none bg-violet-700 -rotate-90 w-[100px] relative -bottom-10 right-0 rounded-[20px] accent-red-500 cursor-pointer " + " " + styleRangeInput} list="values" />
        </div>
        
        <datalist id={id} className={"flex flex-col justify-between w-52 " + " " + styleDatalist} >
        {options.map((option, index) => {
            return <option key={option + index} value={index} label={option} >{option}</option>
        })}
        </datalist>
        </div>
    )
}