import { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        height: 100px;
    }
`;

export const isLeaving = (leaving) => {
    if (leaving) {
        return css`
            animation-duration: 0.3s;
            animation-direction: reverse;
        `;
    }
    else {
        return css`
            animation-duration: 0.5s;
        `;
    }
}

export const fadeInAni = css`
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
`;