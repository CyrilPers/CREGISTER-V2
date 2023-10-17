import React from 'react'
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { TiDelete } from "react-icons/ti"
import { fadeInFromRight } from '../../theme/animations';


export default function HorizontalCard({
  onClick,
  name,
  surname,
  element1,
  showDeleteButton,
  onDelete,
  element2,
  isSelected,
  index,
  isInvoice
}) {

  return (
    <HorizontalCardStyled
      onClick={onClick}
      $isSelected={isSelected}
      $isModeAdmin={showDeleteButton}
      $isInvoice={isInvoice}
    >
      <div className='cards'>
        {showDeleteButton && <button className="delete-button" aria-label="delete-button" onClick={onDelete}>
          <TiDelete className="delete-icon" />
        </button>}
        <div className='index'>{index}</div>
        <div className='name'>{name}</div>
        <div className='surname'>{surname}</div>
        <div className='element1'>{element1}</div>
        <div className='element2'>{element2}</div>
      </div>
    </HorizontalCardStyled>
  )
}

const HorizontalCardStyled = styled.div`

    .cards {
    overflow : hidden;
    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.greyLight};
    height: 40px;
    box-sizing: border-box;
    width: auto;
    display: flex;
    box-shadow: -2px 2px 2px 0px rgb(0 0 0 / 20%);
    margin: 0px;
    margin-top: 10px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.semiBold};
    font-size: ${theme.fonts.size.P3};
    overflow-x: hidden;
    text-overflow: ellipsis;
    position: relative;
    padding: 0 20px;
    position: relative;
    }

    .delete-button {
      position: absolute;
      align-items: center;
      right: 0px;
      cursor: pointer;
      color: ${theme.colors.primary};
      border: none;
      background: none;
      animation : ${fadeInFromRight} ${theme.animation.speed.slow};
      z-index: 3;

      .delete-icon{
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
    }
    @media(max-width: 1388px) { 
      .cards{
      padding-right: 50px;
      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.bold};

      }
    }
    ${({ $isSelected, $isModeAdmin }) => $isSelected && $isModeAdmin && selectedStyle}
    ${({ $isModeAdmin, $isInvoice }) => $isModeAdmin && !$isInvoice && adminStyle}
    ${({ $isInvoice, $isModeAdmin }) => $isInvoice && !$isModeAdmin && adminStyle}
`

const selectedStyle = css`
    .cards {
      background: ${theme.colors.primary};
  
    &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.dark};
    }
  }
`
const adminStyle = css`
    .cards {
      &:hover {
      cursor: pointer;
      box-shadow: ${theme.shadows.orangeHighlight};
      }
    }
`

