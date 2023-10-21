import { StyledContainerMenu } from "./StyledContainerMenu"

export const ContainerMenu = (props:any) => {
    return(
        <StyledContainerMenu>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>finanças</li>
                    <li>animais</li>
                    <li>RH</li>
                </ul>
            </nav>
        </StyledContainerMenu>
    )
}