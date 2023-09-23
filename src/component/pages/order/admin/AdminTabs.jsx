import React, { useContext } from 'react'
import { styled } from 'styled-components';
import Tab from '../../../reusable-ui/Tab';
import { theme } from '../../../../theme';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import AdminContext from '../../../../context/AdminContext';
import { getTabsConfigProduct, getTabsConfigCustomer } from './getTabsConfig';


export default function AdminTabs() {

  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    currentPage,
  } = useContext(AdminContext)


  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }

  const tabs = (currentPage === "invoice") ? getTabsConfigProduct() : getTabsConfigCustomer()

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) =>
        <Tab
          {...tab}
          key={tab.index}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      )}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 1px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }
`;
