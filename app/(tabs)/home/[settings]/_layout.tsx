import {
    Stack,
    useGlobalSearchParams,
    useLocalSearchParams,
} from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { ThemedText } from "../../../../components/ThemedText";
import { ThemedView } from "../../../../components/ThemedView";

const HomeLayout: React.FC = () => {
  const { settings } = useGlobalSearchParams();
  const { settings: local } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView>
        <ThemedText>Settings params layout:</ThemedText>
        <ThemedText>Global: {settings}</ThemedText>
        <ThemedText>Local: {local}</ThemedText>
      </ThemedView>
      <Stack />
    </SafeAreaView>
  );
};

export default HomeLayout;
