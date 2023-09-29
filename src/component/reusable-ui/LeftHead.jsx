import React from 'react'
import Header from './Header'
import { theme } from '../../theme';
import styled from 'styled-components';

export default function LeftHead({ title }) {
    return (
        <Header>
            <LeftHeadStyled>
                {title}
            </LeftHeadStyled>
        </Header>
    )
}

const LeftHeadStyled = styled.div`
    font-size: ${theme.fonts.size.P4};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.primary}
`;