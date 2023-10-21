import styled from "styled-components";

export const StyledContainerMenu = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 20%;
    
    nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    ul{
        list-style: none;
        width: 100%;
    }
    li{
        background-image: radial-gradient(circle at -20.71% 50%, #fffcfe 0, #fff3f5 16.67%, #f1e8ea 33.33%, #dddddd 50%, #cad2cf 66.67%, #b9c7c2 83.33%, #aabeb5 100%);
        font-size: 4rem;
        letter-spacing: 5px;
        padding: 10px 10px 10px 10px;
        margin-top: 20px;
        border-radius: 15px;
        text-align: center;
    }
`