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
import { useToast } from "@chakra-ui/react";

export const useUserApi = (apiMode: ApiMode) => {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [queryState, setQueryState] = useState(false);

  const toast = useToast();

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

    toast({
      description: `생성 완료 - 이름: ${name}`,
      isClosable: true,
    });
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

    toast({
      description: `수정 완료 - ID: ${id} 이름: ${newName}`,
      isClosable: true,
    });
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
      await axios.delete(`${apiGroup}/users/${id}`);
      setQueryState((prev) => !prev);
    }

    toast({
      description: `삭제 완료 - ID: ${id}`,
      isClosable: true,
    });
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
    toast({
      description: `요청 완료 - ${apiMode}`,
      isClosable: true,
    });
  }, [apiMode, apiGroup, gqlData, queryState, toast]);

  return {
    deleteData,
    saveData,
    setName,
    setNewName,
    updateData,
    users,
  };
};
