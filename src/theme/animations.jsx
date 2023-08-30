import { css } from "styled-components";

export const basketCardAnimation = css`
    .card-transition-appear {
        .card{
        transform: translateX(100%);
        opacity: 0%;

        }
    }
    .card-transition-appear-active {
        .card{
            transition: 0.5s;
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
            transition: 0.5s;
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
            transition: 0.5s;
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
    transition: all 500ms;
}
}
`