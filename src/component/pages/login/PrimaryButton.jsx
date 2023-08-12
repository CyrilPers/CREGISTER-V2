import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme';

export default function PrimaryButton({Icon, label}) {
  return (
    <PrimaryButtonStyled>
    <span>{label}</span>
    {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    display: inline-flex;
    padding: 18px 24px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.bold};
    line-height: 15px;
    text-align: center;
    font-family: Arial; 

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }

    &:active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }

`;