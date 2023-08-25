import React, { useContext } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import { getTabSelected, getTabsConfig } from '../getTabsConfig';
import { theme } from '../../../../../theme';
import { EMPTY_PRODUCT } from '../../../../../enum/product';

export default function AdminPanel() {

  const { currentTabSelected, selectedProduct } = useContext(AdminContext)

  const hasAlreadyBeenClicked = selectedProduct !== EMPTY_PRODUCT
  const tabs = getTabsConfig(hasAlreadyBeenClicked)
  const tabSelected = getTabSelected(tabs, currentTabSelected)


  return (
    <AdminPanelStyled>
      {tabSelected.content}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
  height: 240px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
  padding: 30px 5%;
  `;