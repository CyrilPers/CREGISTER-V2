import React from 'react'
import { styled } from 'styled-components';

export default function SelectInput({
    value,
    name,
    className,
    id,
    options,
    onChange,
    onBlur,
    onFocus,
}) {
    return (
        <SelectInputStyled
            value={value}
            name={name}
            className={className}
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
        >
            {options.map(({ value, label }) => (
                <option key={label} value={value}> {label} </option>
            ))
            }
        </SelectInputStyled >
    )
}

const SelectInputStyled = styled.select`
  
`;
