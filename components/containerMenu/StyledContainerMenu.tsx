import styled from "styled-components";

export const StyledContainerMenu = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 25%;
    background-color:rgba(140,220,140,0.35);
    
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
        background: rgb(255,252,254);
        background: linear-gradient(90deg, rgba(255,252,254,1) 0%, rgba(255,255,245,1) 16%, rgba(241,240,234,1) 33%, rgba(221,235,221,1) 50%, rgba(202,230,207,1) 68%, rgba(185,225,194,1) 85%, rgba(170,220,181,1) 100%);
        font-size: 4rem;
        letter-spacing: 5px;
        padding: 10px 10px 10px 10px;
        margin-top: 20px;
        border-radius: 15px;
        text-align: center;
    }
`
// .active 
// background: rgb(170,190,181);
// background: linear-gradient(90deg, rgba(170,190,181,1) 0%, rgba(185,199,194,1) 16%, rgba(202,210,207,1) 33%, rgba(221,221,221,1) 50%, rgba(241,232,234,1) 68%, rgba(255,243,245,1) 85%, rgba(255,252,254,1) 100%);

//inative
//background: rgb(255,252,254);
//background: linear-gradient(90deg, rgba(255,252,254,1) 0%, rgba(255,255,245,1) 16%, rgba(241,240,234,1) 33%, rgba(221,235,221,1) 50%, rgba(202,230,207,1) 68%, rgba(185,225,194,1) 85%, rgba(170,220,181,1) 100%);

