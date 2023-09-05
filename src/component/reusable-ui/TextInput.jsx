import React from 'react'
import { css, styled } from 'styled-components';
import { theme } from '../../theme';

const TextInput = React.forwardRef(
  ({ onChange,
    Icon,
    className,
    version = "default",
    ...extraProps }, ref) => {
    return (
      <TextInputStyled className={className} version={version} >
        <div className='icon'>{Icon && Icon}</div>
        <input
          ref={ref}
          type="text"
          onChange={onChange}
          {...extraProps}
        />
      </TextInputStyled>
    )
  }
)

export default TextInput

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

  ${({ version }) => extraStyle[version]}
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
    background: ${theme.colors.background_white}; 
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; 
    }
  }

  @media(max-width: 767px) {
    padding: 0px 5px;
  }
`

const extraStyle = {
  default: extraNormalStyle,
  minimalist: extraMinimalistStyle,
}