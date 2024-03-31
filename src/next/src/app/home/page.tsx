import { LinkButton } from "@core/link-button";
import { getUsers } from "./api";

const Home = async () => {
  const {
    data: { users },
  } = await getUsers();

  return (
    <>
      <LinkButton href="/">Go Root</LinkButton>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
