import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { styled } from 'styled-components';
import { casinoAnimation } from '../../theme/animations';
import { theme } from '../../theme';

export default function CasinoEffect({ count, className }) {
    return (
        <TransitionGroup component={CasinoEffectStyled}>
            <CSSTransition
                classNames="count-animated"
                timeout={300}
                key={count}
            >
                <span className={className}>{count}</span>
            </CSSTransition>
        </TransitionGroup>
    )
}


const CasinoEffectStyled = styled.div`
    letter-spacing: 2px;  
    position: relative;
    overflow-y: hidden;

    span {
        display: inline-block;
    }

    ${casinoAnimation}
`;