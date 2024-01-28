import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Page } from "~/core/page";

export const MainPage = () => {
  return (
    <Page>
      <Link to="/user">
        <Button w="full">Go To User PlayGround</Button>
      </Link>
    </Page>
  );
};
