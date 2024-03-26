import { LinkButton } from "../../core/link-button";
import { HomeAPI } from "./api";

const Home = async () => {
  const { users, gqlUsers } = await HomeAPI();

  return (
    <>
      <LinkButton href="/">Go Root</LinkButton>
      {users.map((user: any) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
      {gqlUsers.users.map((user: any) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
