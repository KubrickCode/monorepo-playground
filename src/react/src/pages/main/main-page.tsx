import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <Link to="/user">
      <Button>Go To User PlayGround</Button>
    </Link>
  );
};
