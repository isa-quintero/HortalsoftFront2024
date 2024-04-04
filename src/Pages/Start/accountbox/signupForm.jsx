import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer/index";
import { AccountContext } from "../accountbox/accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nombre Completo" />
        <Input type="email" placeholder="Correo" />
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Confirma tu contraseña" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Iniciar</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
      ¿Ya tienes una cuenta?
        <BoldLink href="#" onClick={switchToSignin}>
          Iniciar sesion
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
