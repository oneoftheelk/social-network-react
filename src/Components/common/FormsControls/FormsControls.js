import React from 'react';
import styles from './FormsControls.module.css';

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    const classForError = hasError ? styles.error : "";
    return (
        <div className={ `${styles.formControl} ${classForError}` }>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}