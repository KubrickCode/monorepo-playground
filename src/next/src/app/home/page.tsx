import { LinkButton } from "@core/link-button";

import { Users } from "./components/users";
import { CreateUserForm } from "./components/create-user-form";
import { Suspense } from "react";

const Home = async () => {
  return (
    <>
      <LinkButton href="/">Go Root</LinkButton>
      <Suspense fallback={<>...</>}>
        <Users />
      </Suspense>
      <CreateUserForm />
    </>
  );
};

export default Home;
