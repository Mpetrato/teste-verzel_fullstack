import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 10px 20px;
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
`

export const LeftContainer = styled.div`

    & > img {
        width: 150px;
    }

    @media (max-width: 768px) {
        

        img {
            width: 100px;
        }
    }
    @media (max-width: 425px) {
        

        img {
            width: 80px;
        }
    }

    
`

export const RightContainer = styled.div`
    display: flex; 
    align-items: center;

    & > ul {
        display: flex;  
    }

    & > ul,li, a {
        text-decoration: none;
        list-style: none;
        color: #000;
        transition: all .2s ease-in;
        margin-left: 20px;
    }
    & > ul,li, a:hover {
        color: #00000099;
    }

    & > a {
        padding: 10px 20px;
        border: 1px solid #000;
        background-color: #000;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        border-radius: 10px;
        margin-left: 40px;
        cursor: pointer;
        transition: all .3s ease;
    }
    & > a:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }

    @media (max-width: 768px) {
        

        & > ul,li, a {
            text-decoration: none;
            list-style: none;
            color: #000;
            transition: all .2s ease-in;
            margin-left: 5px;
        }

        & > a {
            color: #fff;
        }
    }

    @media (max-width: 425px) {
        font-size: 12px;


        & > ul,li, a {
            margin-left: 5px;
            font-size: 12px;
        }

        & > a {
            padding: 10px;
        }
    }
`

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 5px;

    & > svg {
        font-size: 20px;
        margin-right: 5px;
    }

    @media (max-width: 425px) {
        display: none;
    }
`