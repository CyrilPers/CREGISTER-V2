import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import { fadeIn } from '../../../../../theme/animations.jsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function ImagePreview({ imageSource, title }) {
    return (
        <TransitionGroup component={ImagePreviewStyled}>
            {imageSource ? (
                <CSSTransition
                    classNames={"picture-animation"}
                    key={title}
                    timeout={1000}
                    appear
                >
                    <img src={imageSource} alt={title} />
                </CSSTransition>
            ) : (
                <div className='empty-img'>Aucune image</div>
            )}

        </TransitionGroup>
    )
}

const ImagePreviewStyled = styled.div`
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    ${fadeIn}


    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;

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
