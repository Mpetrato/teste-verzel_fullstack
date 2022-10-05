import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        background-color: #000;
    }
`

export const LeftContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: #000;
    border-bottom-right-radius: 350px;

    @media (max-width: 768px) {
        width: 100%;
        height: 30%;
        border-bottom-right-radius: 0;
    }

    @media (max-width: 425px) {
        width: 100%;
        height: 30%;
        border-bottom-right-radius: 0;
    }
`

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    padding: 200px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #FFF;

    @media (max-width: 768px) {
        width: 100%;
        height: 80%;
        border-top-left-radius: 350px;
        padding: 50px;
    }

    @media (max-width: 425px) {
        width: 100%;
        height: 80%;
        border-top-left-radius: 150px;
        padding: 40px;
    }
`