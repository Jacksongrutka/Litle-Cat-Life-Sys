import { StyledContainerData } from "./StyledContainerData";

export const ContainerData = (props:any) => {
    return(
        <StyledContainerData>
            {props.children}
        </StyledContainerData>
    );
}