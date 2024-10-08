interface propsType {
    text: string;
    htmlForID: string;
    styleLabel?: string;
}

export const Label = (props: propsType) => {
    const {text, htmlForID, styleLabel} = props;
    return (
        <div>
            <label htmlFor={htmlForID} className={" " + styleLabel} >{text}</label>
        </div>
    )
}