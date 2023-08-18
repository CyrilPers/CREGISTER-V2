import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import { getTabsConfig } from './getTabsConfig';
import AdminContext from '../../../../context/AdminContext';

export default function AdminPanel() {

  const { currentTabSelected } = useContext(AdminContext)
  const tabs = getTabsConfig(currentTabSelected)
  const tabSelected = tabs.find((tab) => tab.index === currentTabSelected)

  return (
    <AdminPanelStyled className='admin-panel'>
      {currentTabSelected === tabSelected.index && tabSelected.label}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;