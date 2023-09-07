import React, { useContext } from 'react'
import Admin from '../../order/admin/Admin';
import Menu from '../../order/menu/Menu.jsx'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import AdminContext from '../../../../context/AdminContext';

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

    @media(max-width: 767px) {
        height: 50vh;
    }
`;