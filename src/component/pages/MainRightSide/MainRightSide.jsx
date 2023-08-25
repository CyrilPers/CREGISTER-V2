import Menu from '../order/Menu.jsx'
import styled from "styled-components"
import AdminContext from "../../../context/AdminContext"
import Admin from '../order/admin/Admin.jsx'
import theme from "../../../theme"
import { useContext } from 'react'

export default function MainRightSide() {
  const { isModeAdmin } = useContext(AdminContext)

  return (
    <MainRightSideStyled>
      <Menu />
      {isModeAdmin && <Admin />}
    </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
