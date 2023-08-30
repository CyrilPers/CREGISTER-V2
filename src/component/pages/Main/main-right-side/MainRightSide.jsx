import React, { useContext } from 'react'
import Menu from '../../order/Menu';
import Admin from '../../order/admin/Admin';
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import AdminContext from '../../../../context/AdminContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { adminAnimation } from '../../../../theme/animations';

export default function MainRightSide() {

    const { isModeAdmin } = useContext(AdminContext)


    return (
        <MainRightSideStyled>
            <Menu />
            {isModeAdmin && (
                <TransitionGroup className="transition-group">
                    <CSSTransition appear classNames="admin" timeout={500}>
                        <Admin />
                    </CSSTransition>
                </TransitionGroup>
            )}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    
    ${adminAnimation}
`;