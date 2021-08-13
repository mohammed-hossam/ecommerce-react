import React from 'react';
import './formInput.scss';

function FormInput({ handelChange, label, ...props }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handelChange} {...props} />
      {label ? (
        <label
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
