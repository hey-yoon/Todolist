import styled from "styled-components";

const S = {};

S.Input = styled.input`
    width: 100%;
    border: none;
    background-color: #f5f5f5;
    height: 40px;
    border-radius: 10px;
    margin: 0 0 50px 0;
    padding: 0 16px;

    &::placeholder{
        color: #b5b5b5;
    }
`

export default S;