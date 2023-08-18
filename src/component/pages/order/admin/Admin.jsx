import React, { useContext } from 'react'
import { styled } from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminContext from '../../../../context/AdminContext';
import AdminPanel from './admin-panel/AdminPanel';

export default function Admin() {
  const { isCollapsed } = useContext(AdminContext)

  return (
      <AdminStyled>
        <AdminTabs />
        {!isCollapsed && <AdminPanel/>}
      </AdminStyled>
  )
}


const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;