import { LinkButton } from "@core/link-button";
import { getUsers } from "./api";

export const dynamic = "force-dynamic";

const Home = async () => {
  const { data } = await getUsers();
  const { users } = data;
  
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
