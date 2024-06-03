import React from 'react'
import { useField } from 'formik';

function CustomInput({ label, ...props }) {

    const [field, meta] = useField(props);

    return (

        <div class="form-group">
            <label class="form-label text-sm mb-1"> {label} </label>
            <input class={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}  `} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-danger text-sm fw-light mt-2">{meta.error}</div>
            ) : null}
        </div>

    )
}

export default CustomInput