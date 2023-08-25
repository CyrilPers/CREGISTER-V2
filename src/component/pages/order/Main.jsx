import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import Menu from "./Menu"
import Admin from './admin/Admin';
import AdminContext from '../../../context/AdminContext';
import Basket from '../basket/Basket';
import MainRightSide from '../MainRightSide/MainRightSide';


export default function Main() {

  const { isModeAdmin, setIsModeAdmin } = useContext(AdminContext);

  return (

    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    height: 85vh;


    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    grid-template-columns: 25% 1fr;
    overflow: hidden;
  `;