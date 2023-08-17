import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';




export default function Tab({Icon, onClick, className, label}) {
  return (
    <TabStyled 
    onClick={onClick} 
    className={className}
    >
      <div className='icon'>{Icon}</div>
      {label && <span className='label'>{label}</span>}
    </TabStyled>
  )
}


const TabStyled = styled.button`
    border: 1px solid red;
    height: 40px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    position: relative;
    left: 5%;
    top: 1px;

    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};

    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.sub};
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};
    border-radius: 5px 5px 0px 0px;

    &:hover {
        border-bottom: 2px solid ${theme.colors.white};
    }

    .icon {
      display: flex;
    }

    .label {
      margin-left: 8px;
    }
`