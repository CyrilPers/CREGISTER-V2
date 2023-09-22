import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { TiDelete } from "react-icons/ti"
import { fadeInFromRight } from '../../../../../theme/animations';


export default function CustomerCard({
  id,
  key,
  index,
  address,
  name,
  surname,
  phoneNumber,
  showDeleteButton,
  onDelete
}) {

  return (
    <CustomerCardStyled>
      {showDeleteButton && <button className="delete-button" aria-label="delete-button" onClick={onDelete}>
        <TiDelete className="delete-icon" />
      </button>}
      <div className='cards'>
        <div className='name'>{name}</div>
        <div className='surname'>{surname}</div>
        <div className='phoneNumber'>{phoneNumber}</div>
        <div className='city'>{address.city}</div>
      </div>
    </CustomerCardStyled>
  )
}

const CustomerCardStyled = styled.div`
    box-sizing: border-box;
    border-radius: ${theme.borderRadius.round};
    width: auto;
    height: 40px;
    background: ${theme.colors.greyLight};
    display: flex;
    box-shadow: -2px 2px 2px 0px rgb(0 0 0 / 20%);
    margin: 5px;
    margin-top: 10px;
    margin-left: 10px;
    padding: 0 5px;
    position: relative;

    .cards {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.semiBold};
    font-size: ${theme.fonts.size.P3};
    overflow-x: hidden;
    text-overflow: ellipsis;
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
      :hover {
        color: ${theme.colors.red}
      }
      :active{
        color: ${theme.colors.primary}
      }
    }
  
`;