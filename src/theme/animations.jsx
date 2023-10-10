import { css, keyframes } from "styled-components";
import { theme } from './index.jsx'

export const fadeInFromTop = keyframes`
  0% {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: translateY(-40%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

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

export const fadeInFromLeft = keyframes`
    0% {
        position: absolute;
        opacity: 0;
        transform: translateX(0);
    }
    100% {
        opacity: 1;
        transform: translateX(100%);
    }
`

export const fadeInFromBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        transition: all ${theme.animation.speed.slow}
    }
`

export const fadeInFromBottomLog = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        transition: all ${theme.animation.speed.verySlow}
    }
`

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        transition: all ${theme.animation.speed.verySlow}
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
            transition: ${theme.animation.speed.medium} ease-out;
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
            transition: ${theme.animation.speed.medium} ease-out;
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
            transition: ${theme.animation.speed.medium} ease-out;
            transform: translateX(-100%);
            opacity: 0%;
        }
    }
    
`

export const casinoAnimation = css`
.count-animated-enter {
    transform: translateY(100%);

    &.count-animated-active {
        transition: ${theme.animation.speed.slow} ease-out;  
        transform: translateY(0%);            
    }
}

.count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;

    &.count-animated-exit-active {
        transition: ${theme.animation.speed.slow} ease-out;
        transform: translateY(-100%);
    }
}
`

export const menuAnimation = css`
    .animation-card-enter {
        opacity: 0.1;
        transform: translateX(-100%);
        &.animation-card-enter-active {
            opacity: 1;
            transform: translateX(0);
            transition: all ${theme.animation.speed.medium} ease-out;
        }
    }
    .animation-card-exit {
        opacity: 1;
        transform: translateX(0);
        &.animation-card-exit-active {
            opacity: 0.1;
            transform: translateX(-100%);
            transform: all ${theme.animation.speed.medium} ease-out;
        }
    } 
`

export const scaleXAnimation = css`
.animation-card-enter {
    opacity: 0.1;
    transform: scaleX(0);
    &.animation-card-enter-active {
        opacity: 1;
        transform: scaleX(100%);
        transition: all ${theme.animation.speed.medium} ease-out;
    }
}
.animation-card-exit {
    opacity: 1;
    transform: scaleX(100%);
    &.animation-card-exit-active {
        opacity: 0.1;
        transform: scaleX(0);
        transform: all ${theme.animation.speed.medium} ease-out;
    }
} 

    
`
