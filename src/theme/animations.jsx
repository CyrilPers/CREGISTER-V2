import { css, keyframes } from "styled-components";
import { theme } from './index.jsx'

export const fadeInFromRight = keyframes`
    0% {
        position: absolute;
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const basketCardAnimation = css`
    .card-transition-appear {
        .card{
        transform: translateX(100%);
        opacity: 0%;

        }
    }
    .card-transition-appear-active {
        .card{
            transition: ${theme.animation.speed.medium};
            transform: translateX(0%);
            opacity: 100%;
        }
    }
    .card-transition-enter {
        .card{
        transform: translateX(100%);
        opacity: 0%;

        }
    }
    .card-transition-enter-active {
        .card{
            transition: ${theme.animation.speed.medium};
            transform: translateX(0%);
            opacity: 100%;
        }
    }

    .card-transition-exit {
        .card{
            transform: translateX(0%);
            opacity: 100%;
        }
    }
    .card-transition-exit-active {
        .card{
            transition: ${theme.animation.speed.medium};
            transform: translateX(-100%);
            /* transform: scale(0.1); */
            opacity: 0%;
        }
    }
    
`

export const adminAnimation = css`
.admin-appear {
    opacity:0.1;
    transform: translateY(100%);
&.admin-appear-active {
    opacity:1;
    transform: translateY(0);
    transition: all ${theme.animation.speed.slow};
    }
}
`

export const casinoAnimation = css`
.count-animated-enter {
    transform: translateY(100%);

&.count-animated-active {
    transition: ${theme.animation.speed.slow};  
    transform: translateY(0%);            
    }
}

.count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;

&.count-animated-exit-active {
    transition: ${theme.animation.speed.slow};
    transform: translateY(-100%);
    }
}

`

