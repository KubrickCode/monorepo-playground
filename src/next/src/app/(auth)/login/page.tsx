"use client";

import { LoginButton } from "./_components/login-button";
import { login } from "./_utils/login";

const LoginPage = () => (
  <>
    <>Login Page</>
    <LoginButton onClick={login} />
  </>
);

export default LoginPage;
