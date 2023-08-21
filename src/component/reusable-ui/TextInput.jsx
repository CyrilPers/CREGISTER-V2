import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({value, onChange, Icon, className, ...extraProps}) {
  return (
    <InputStyled>
      <div className='icon'>{Icon && Icon}</div> 
      <input
        type="text"
        value={value}
        onChange={onChange}
        {...extraProps}
      />
    </InputStyled>
  )
};

const InputStyled = styled.div`

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-right: 8px; 
      min-width: 1em;  
      color: ${theme.colors.greyMedium}
    }

    
    input{
    border: none;
    align-items: center;
    width: 100%; 
    color: black;


    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;


