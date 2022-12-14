import styled from "styled-components";

export const Container = styled.div`
    width: 265px;
    padding: 8px;
    margin-top: 38px;
    background-color: #f3f5f8;
`
export const BoxShadowWrapper = styled.div`
    box-shadow: rgba(158, 184, 209, 0.40) 0px 2px 9px 0px;
    border-radius: 6px;
`

export const ImageWrapper = styled.div<{image: string}>`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    border-radius: 6px 6px 0 0;
    width: 100%;
    height: 200px;

`

export const ContentWrapper = styled.div`
    padding: 8px 12px;
    background-color: #FFF;
    border-radius: 0 0 6px 6px;

    & > h4 {
        font-size: 14px;
        color: #2e2e37;
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 60px;
    }

    & > h2 {
        color: #000;
        font-weight: 500;
        font-size: 22px;
    }
`
export const CarInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    & > span {
        font-size: 12px;
        color: #8b8c99;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;

    & > button {
        width: 100%;
        padding: 5px;
        font-size: 14px;
        text-transform: uppercase;
        background-color: #000;
        border: 1px solid #000;
        color: #FFF;
        font-weight: 500;
        border-radius: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all .3s ease;
    }

    & > button:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
`
