import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {}

S.Wrapper = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenterColumn}
`

S.ImageWrapper = styled.div`
    flex: 0.7;
    ${flexCenter}

    & img{
        width: 40%;
    }
`

S.ButtonWrapper = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 100px 0;
`

export default S;