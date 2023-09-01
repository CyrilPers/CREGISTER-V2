import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import { fadeIn } from '../../../../../theme/animations.jsx'

export default function ImagePreview({ imageSource, title }) {
    return (
        <ImagePreviewStyled key={title}>
            {imageSource ? (
                <img src={imageSource} alt={title} />
            ) : (
                <div className='empty-img'>Aucune image</div>
            )}
        </ImagePreviewStyled>
    )
}

const ImagePreviewStyled = styled.div`
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    


    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        animation: ${fadeIn} ${theme.animation.speed.verySlow} ease-out;
    }

    .empty-img {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${theme.colors.greyLight};
        line-height: 1.5;
        color: ${theme.colors.greySemiDark};
        border-radius: ${theme.borderRadius.round};
    }
`;
