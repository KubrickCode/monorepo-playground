import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import { ApiMode, User } from "./user-page";
import { useMutation, useQuery } from "@apollo/client";
import {
  UserCreateDocument,
  UserDeleteDocument,
  UserEditDocument,
  UserPageDocument,
} from "~/core/graphql/generated";

export const useUserApi = (apiMode: ApiMode) => {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [queryState, setQueryState] = useState(false);

  const apiGroup = useMemo(() => {
    switch (apiMode) {
      case "restNest":
        return "/api";
      case "graphqlNest":
        return "/graphql";
      case "restFiber":
        return "/go";
    }
  }, [apiMode]);

  const { data: gqlData } = useQuery(UserPageDocument, {
    skip: apiMode !== "graphqlNest",
  });

  const [createMutation] = useMutation(UserCreateDocument, {
    refetchQueries: [UserPageDocument],
  });

  const [editMutation] = useMutation(UserEditDocument, {
    refetchQueries: [UserPageDocument],
  });

  const [deleteMutation] = useMutation(UserDeleteDocument, {
    refetchQueries: [UserPageDocument],
  });

  const saveData = async () => {
    if (apiMode === "graphqlNest") {
      createMutation({
        variables: {
          input: {
            name,
          },
        },
      });
    } else {
      await axios.post(`${apiGroup}/users`, { name });
      setQueryState((prev) => !prev);
    }
  };

  const updateData = async (id: number) => {
    if (!newName) alert("이름을 입력해주세요");

    if (apiMode === "graphqlNest") {
      editMutation({
        variables: {
          input: {
            id,
            name: newName,
          },
        },
      });
    } else {
      await axios.put(`${apiGroup}/users/${id}`, { name: newName });
      setQueryState((prev) => !prev);
    }
  };

  const deleteData = async (id: number) => {
    if (apiMode === "graphqlNest") {
      deleteMutation({
        variables: {
          input: {
            id,
          },
        },
      });
    } else {
      await axios.delete(`/api/users/${id}`);
      setQueryState((prev) => !prev);
    }
  };

  useEffect(() => {
    if (apiMode === "graphqlNest") {
      gqlData && setUsers(gqlData.users);
    } else {
      const getData = async () => {
        const { data } = await axios.get(`${apiGroup}/users`);
        setUsers(data);
      };
      getData();
    }
  }, [apiMode, apiGroup, gqlData, queryState]);

  return {
    deleteData,
    saveData,
    setName,
    setNewName,
    updateData,
    users,
  };
};
