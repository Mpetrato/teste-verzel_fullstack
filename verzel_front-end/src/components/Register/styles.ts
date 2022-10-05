import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    width: 100%;

    & > h4 {
        font-size: 48px;
    }

    & > span {
        margin-top: 20px;
    }
    & > span > a {
        font-weight: bold;
        color: #000;
    }

    @media (max-width: 768px) {
        
        & > h4 {
            font-size: 36px;
        }
    }
`
export const Form = styled.form`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.3);
    padding: 10px;
    border-radius: 10px;

    & > label {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    & > input {
        outline: none;
        border: none;
        font-size: 14px;
        color: #000;
    }

    & > input::placeholder {
        color: #CCC;
    }
`
export const Button = styled.button`
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
    border: 1px solid #000;
    background-color: #000;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        color: #000;
        background-color: #FFF;
        border: 1px solid #000;
    }
`