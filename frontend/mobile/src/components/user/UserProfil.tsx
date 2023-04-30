import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import {
  ColumnGroup,
  ColumnTwo,
  MainContainer,
  Row,
  Stack,
} from "../global/containers";
import { useUser } from "./api";
import { TextColor } from "../global/styles";

interface UserProfilProps {}

export const UserProfil = ({}: UserProfilProps) => {
  const { reFetch, setUser, user } = useUser();
  console.log({ user });
  return (
    <MainContainer>
      {/* <Stack>
        <Row>
          <ColumnGroup width={80}>
            <ColumnTwo>
              <Row height={10}>
                <Text style={style.userInfoText}>{user.email}</Text>
              </Row>
              <Row height={10}>
                <Text style={style.userInfoText}>
                  {user.homeSpot ?? "No home spot set"}
                </Text>
              </Row>
            </ColumnTwo>
            <ColumnTwo>
              <Row height={10}>
                <Text style={style.userInfoText}>{user.userName}</Text>
              </Row>
              <Row height={10}>
                <Text style={style.userInfoText}>
                  {new Date(user.createdAt).toDateString()}
                </Text>
              </Row>
            </ColumnTwo>
          </ColumnGroup>
        </Row>
      </Stack> */}
    </MainContainer>
  );
};

const style = StyleSheet.create({
  userInfoText: {
    color: TextColor,
  },
});
