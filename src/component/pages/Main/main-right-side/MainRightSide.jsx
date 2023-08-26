import React, { useContext } from 'react'
import Menu from '../../order/Menu';
import Admin from '../../order/admin/Admin';
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
`;