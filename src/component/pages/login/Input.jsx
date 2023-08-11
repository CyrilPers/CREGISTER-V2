import React from 'react'
import {BsPersonCircle} from "react-icons/bs"

export default function Input({value, onChange, placeholder}) {
  return (
    <div className="input-container">
    <BsPersonCircle className="icon" />
    <input
      type="text"
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      required
    />
  </div>
  )
};
