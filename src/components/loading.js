import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Loader } from 'react-feather'
import { colors } from '../utils/styles'

const LoadingWrapper = styled.div`
    position: fixed;
    z-index: 1006;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

const SpinnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledSpinner = styled(Loader)`
    color: ${colors.primaryOrange};
    height: 80px;
    width: 80px;
    margin: auto;
    // border: 0.5em solid currentColor;
    // border-right-color: transparent;
    animation: spinner-border 1.25s linear infinite;
`

const StyledText = styled.h1`
    color: ${colors.primaryOrange};
    margin-top: 30px;
    text-align: center;
`

const ldsSpinner = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

const SpinnerCss = css`
    color: ${colors.primaryOrange};
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: auto;

    div {
        transform-origin: 40px 40px;
        animation: ${ldsSpinner} 1.2s linear infinite;
    }
    div:after {
        content: ' ';
        display: block;
        position: absolute;
        top: 3px;
        left: 37px;
        width: 6px;
        height: 18px;
        border-radius: 20%;
        background: ${colors.primaryOrange};
    }
    div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
    }
    div:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
    }
    div:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
    }
    div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
    }
    div:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
    }
    div:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
    }
    div:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
    }
    div:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
    }
    div:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
    }
    div:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
    }
    div:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
    }
    div:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
    }
`

const Loading = ({ displayText }) => (
    <LoadingWrapper>
        <SpinnerDiv>
            {/* <StyledSpinner animation="border" role="status" /> */}

            <div css={SpinnerCss}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <StyledText>{displayText}</StyledText>
        </SpinnerDiv>
    </LoadingWrapper>
)

export default Loading
