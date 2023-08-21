import React from 'react'
import { css, styled } from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({value, onChange, Icon, className, version = {version}, ...extraProps}) {
  return (
    <TextInputStyled className={className} version={version} >
      <div className='icon'>{Icon && Icon}</div> 
      <input
        type="text"
        value={value}
        onChange={onChange}
        {...extraProps}
      />
    </TextInputStyled>
  )
};

const TextInputStyled = styled.div`

    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin: 0 8px 0 10px; 
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
  ${(props) => {
    if (props.version === "normal") return extraNormalStyle
    if (props.version === "minimalist") return extraMinimalistStyle
  }}
`

const extraNormalStyle = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraMinimalistStyle = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`