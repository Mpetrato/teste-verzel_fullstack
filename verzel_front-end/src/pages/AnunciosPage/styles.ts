import styled from "styled-components";

export const Container = styled.div`
    background-color: #f3f5f8;
    min-height: 100vh;
`

export const AnunciosWrapper = styled.div`
    padding: 150px 40px;

    & > h2 {
        font-size: 32px;
        font-weight: 400;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #CCC;
    width: 100%;
`