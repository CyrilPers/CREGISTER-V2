import React, { useContext } from 'react'
import { styled } from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminContext from '../../../../context/AdminContext';
import AdminPanel from './admin-panel/AdminPanel';
import { fadeInFromBottom } from '../../../../theme/animations';
import { theme } from '../../../../theme';

export default function Admin() {
  const { isCollapsed } = useContext(AdminContext)

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}


const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  animation: ${fadeInFromBottom} ease-out ${theme.animation.speed.slow};
  z-index: 3;
`