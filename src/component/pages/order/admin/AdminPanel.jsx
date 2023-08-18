import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import AdminContext from '../../../../context/AdminContext';

export default function AdminPanel() {

  const {
    currentTabSelected, 
  } = useContext(AdminContext)

  return (
    <AdminPanelStyled className='admin-panel'>
      {currentTabSelected === "add" && "Ajouter un produit"}
      {currentTabSelected === "edit" && "Modifier un produit"}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;