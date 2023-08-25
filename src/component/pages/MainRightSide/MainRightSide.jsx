import { useContext } from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import Menu from "./Menu/Menu"
import AdminContext from "../../../context/AdminContext"
import Admin from '../order/admin/Admin.jsx'

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
