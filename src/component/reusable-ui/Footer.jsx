import React from 'react'

export default function Footer({ children }) {
    return (
        <FooterStyled>
            {children}
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    height: 70px;
    background: ${theme.colors.background_dark}; 
`;