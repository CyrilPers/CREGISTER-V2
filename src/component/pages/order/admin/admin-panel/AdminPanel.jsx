import React, { useContext } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import { tabsConfig } from '../tabsConfig';
import { theme } from '../../../../../theme';

export default function AdminPanel() {

  const { currentTabSelected } = useContext(AdminContext)
  const tabs = tabsConfig
  const tabSelected = tabs.find((tab) => tab.index === currentTabSelected)

  return (
    <AdminPanelStyled>
      {tabSelected.label}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;