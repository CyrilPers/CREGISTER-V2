import React from 'react'
import { styled } from 'styled-components';

export default function SelectInput({ options, className, id, name }) {
    return (
        <SelectInputStyled name={name} className={className} id={id}>
            {options.map(({ value, label }) => (
                <option option value={value}> {label} </option>
            ))
            }
        </SelectInputStyled >
    )
}

const SelectInputStyled = styled.select`
  
`;
