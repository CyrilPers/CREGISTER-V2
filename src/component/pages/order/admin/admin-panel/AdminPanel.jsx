import React, { useContext, useEffect } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import { getTabSelected, getTabsConfigProduct, getTabsConfigCustomer } from '../getTabsConfig';
import { theme } from '../../../../../theme';
import { EMPTY_PRODUCT } from '../../../../../enum/product';
import { EMPTY_CUSTOMER } from '../../../../../enum/customer';

export default function AdminPanel() {

  const { currentTabSelected, selectedProduct, selectedCustomer, currentPage } = useContext(AdminContext)

  const hasAlreadyBeenClicked = selectedProduct !== EMPTY_PRODUCT
  const tabsProducts = getTabsConfigProduct(hasAlreadyBeenClicked)
  const tabSelectedProduct = getTabSelected(tabsProducts, currentTabSelected)

  const hasAlreadyBeenClickedCustomer = selectedCustomer !== EMPTY_CUSTOMER
  const tabsCustomer = getTabsConfigCustomer(hasAlreadyBeenClickedCustomer)
  const tabSelectedCustomer = getTabSelected(tabsCustomer, currentTabSelected)


  return (
    <AdminPanelStyled>
      {currentPage === "invoice" && tabSelectedProduct.content}
      {currentPage === "customers" && tabSelectedCustomer.content}
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

  @media(max-width: 767px) {
    height: 150px;
    padding: 5px 10%;
  }
  `;