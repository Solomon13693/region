import React, { useState } from 'react'
// import { IoMdEyeOff, IoMdEye } from 'react-icons/io'
import { useField } from 'formik';

function CustomPassword({ label, ...props }) {

    const [field, meta] = useField(props);

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (

        <>

            <div class="form-group">
                <label class="form-label text-sm"> {label} </label>
                <input type={!show ? 'password' : 'text'} class={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}  `}   {...field} {...props} />
                {/* <span class="input-group-text">
                    {!show ? <IoMdEyeOff className="visiblePassword" onClick={handleClick} /> : <IoMdEye className="visiblePassword" onClick={handleClick} />}
                </span> */}
            </div>

            {meta.touched && meta.error ? (
                <div className="text-danger text-sm fw-light mt-1">{meta.error}</div>
            ) : null}

        </>

    )
}

export default CustomPassword