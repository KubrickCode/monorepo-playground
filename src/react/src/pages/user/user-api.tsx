import { useEffect, useState } from "react";
import axios from "axios";

import { ApiMode, User } from "./user-page";
import { useMutation, useQuery } from "@apollo/client";
import {
  UserCreateDocument,
  UserEditDocument,
  UserPageDocument,
} from "~/core/graphql/generated";

export const useUserApi = (apiMode: ApiMode) => {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [queryState, setQueryState] = useState(false);

  const { data: gqlData } = useQuery(UserPageDocument, {
    skip: apiMode !== "graphql",
  });

  const [createMutation] = useMutation(UserCreateDocument, {
    refetchQueries: [UserPageDocument],
  });

  const [editMutation] = useMutation(UserEditDocument, {
    refetchQueries: [UserPageDocument],
  });

  const getData = async () => {
    const { data } = await axios.get("/api/users");
    setUsers(data);
  };

  const saveData = async () => {
    if (apiMode === "graphql") {
      createMutation({
        variables: {
          input: {
            name,
          },
        },
      });
    } else {
      await axios.post("/api/users", { name });
      setQueryState((prev) => !prev);
    }
  };

  const updateData = async (id: number) => {
    if (!newName) alert("이름을 입력해주세요");

    if (apiMode === "graphql") {
      editMutation({
        variables: {
          input: {
            id,
            name: newName,
          },
        },
      });
    } else {
      await axios.put(`/api/users/${id}`, { name: newName });
      setQueryState((prev) => !prev);
    }
  };

  const deleteData = async (id: number) => {
    await axios.delete(`/api/users/${id}`);
    setQueryState((prev) => !prev);
  };

  useEffect(() => {
    if (apiMode === "graphql" && gqlData) {
      setUsers(gqlData.users);
    } else {
      getData();
    }
  }, [apiMode, gqlData, queryState]);

  return {
    deleteData,
    saveData,
    setName,
    setNewName,
    updateData,
    users,
  };
};
