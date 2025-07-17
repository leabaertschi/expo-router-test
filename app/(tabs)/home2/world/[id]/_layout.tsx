import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { ThemedText } from "../../../../../components/ThemedText";
import { ThemedView } from "../../../../../components/ThemedView";

const HomeLayout: React.FC = () => {
  const { id } = useGlobalSearchParams();
  const { id: local } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView>
        <ThemedText>id params layout:</ThemedText>
        <ThemedText>Global: {id}</ThemedText>
        <ThemedText>Local: {local}</ThemedText>
      </ThemedView>
      <Stack />
    </SafeAreaView>
  );
};

export default HomeLayout;
