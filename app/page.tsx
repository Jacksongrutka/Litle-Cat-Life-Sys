'use client'

import { ContainerPage } from "@/components/containerPage/ContainerPage";
import { ContainerMenu } from "@/components/containerMenu/ContainerMenu";
import { ContainerData } from "@/components/containerData/ContainerData";
import { SubmitButton } from "@/components/submitButton/SubmitButton";
import { StyledPage } from "./StyledPage";


export default function Home(props:any) {
  return (
    <ContainerPage>
        <ContainerMenu/>
        <ContainerData>
          <StyledPage>
            <form>
              <h1>Faça seu login</h1>
              <div>
                <h2>Login</h2>
                <input type="text" name="Login" id="Login"  />
              </div>
              <div>
                <h2>Password</h2>
                <input type="password" name="Password" id="Password" />
              </div>
              <SubmitButton/>
            </form>
          </StyledPage>
        </ContainerData>
    </ContainerPage>
  );
}
