import styled from "styled-components";

export const Container = styled.div`
    background-color: #f3f5f8;
    min-height: 100vh;
`
export const CarContainer = styled.div`
    padding: 100px 40px;
`

export const HeaderCarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media (max-width: 425px) { 
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`

export const HeaderInfo = styled.div `

    & > h3 {
        font-size: 22px;
        font-weight: bold;
    }

    & > h4 {
        font-size: 14px;
        color: #686976;
    }
`

export const SelectContainer = styled.div`


    & > select {
        border: none;
        outline: none;
        font-size: 16px;
        background-color: transparent;
    }
`

export const CarListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;


    @media (max-width: 425px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`