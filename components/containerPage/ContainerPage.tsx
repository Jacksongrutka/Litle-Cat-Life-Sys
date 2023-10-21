'use client'

import { StyledContainerPage } from "./StyledContainerPage";
import { ContainerMenu } from "../containerMenu/ContainerMenu";
import { ContainerData } from "../containerData/ContainerData";

export const ContainerPage = (props:any) => {
    return (
      <StyledContainerPage>
        <ContainerMenu>

        </ContainerMenu>
        <ContainerData>

        </ContainerData>
      </StyledContainerPage>
    );
  }