import { Errors, FlexInput, InputForm } from "./style";


function FormInput(props: any) {
    return (
        <FlexInput fullWidth={props.fullWidth}>
            {props.labeled ? (
                <label htmlFor={props.forInput}>{props.label}</label>
            ) : (
                ""
            )}
            <InputForm
                id={props.name}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                autoComplete={"off"}
                Width={props.fullWidth}
            />
            {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta,
            }) => (
                <>
                    {props.children}
                    {meta.touched && meta.error && <Errors>{meta.error}</Errors>}
                </>
            )}
        </FlexInput>
    );
}

export default FormInput;
