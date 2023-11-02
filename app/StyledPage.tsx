import styled from "styled-components";

export const StyledPage = styled.div`
    display:flex;
    width: 100%;
    background-color: #ffffff;
    height: 100%;
    align-items:center;
    justify-content:center;
    form{
        display:flex;
        flex-direction: column;
    }
    form h1{
        font-size: 3.5rem;
        padding-bottom: 30px;
    }
    form div{
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
    }
    form div h2{
        font-size: 2rem;
        padding-right: 10px;
    }
    form div input{
        font-size: 1.5rem;
    }
`