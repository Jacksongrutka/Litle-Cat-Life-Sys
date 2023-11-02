
import { StyledContainerPage } from "./StyledContainerPage";


export const ContainerPage = (props:any) => {
    return (
      <StyledContainerPage>
        {props.children}
      </StyledContainerPage>
    );
  }