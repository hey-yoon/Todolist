import styled, { css } from "styled-components";

const sizeCss = {
    small: css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
    `,
    full: css`
        width: 100%;
        height: 8 / 1;
        padding: 16px 0;
    `
}

const shapeCss = {
    default: css``,
    small: css`
        border-radius: 10px;
    `,
    large: css`
        border-radius: 20px;
    `,
    big: css`
        border-radius: 30px;
    `,
    round: css`
        border-radius: 50%;
    `
}

const variantCss = {
    black: css`
        background-color: ${({theme})=>theme.PALETTE.background["black"]};
    `
}

const colorCss = {
    white: css`
        color: #fff;
    `,
    black: css`
        color: #333333;
    `
}

const Button = styled.button`

    ${({size})=> sizeCss[size]}
    ${({shape})=> shapeCss[shape]}
    ${({variant})=> variantCss[variant]}
    ${({color})=> colorCss[color]}

    border: none;
    cursor: pointer;
`

export default Button;