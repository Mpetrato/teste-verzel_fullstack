import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 10px 40px;
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LeftContainer = styled.div`

    & > img {
        width: 150px;
    }
`

export const RightContainer = styled.div`

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
`