import {
  Link,
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import React from "react";
import { Pressable, ScrollView } from "react-native";
import { ThemedText } from "../../../../../components/ThemedText";
import { ThemedView } from "../../../../../components/ThemedView";

const Overview: React.FC = () => {
  const { id } = useGlobalSearchParams();
  const { id: local } = useLocalSearchParams();
  return (
    <ScrollView>
      <ThemedView>
        <ThemedText>id params route:</ThemedText>
        <ThemedText>Global: {id}</ThemedText>
        <ThemedText>Local: {local}</ThemedText>
      </ThemedView>
      <ThemedView>
        <Link
          href={{
            pathname: "/(tabs)/home2/world/[id]/overview",
            params: { id: "foo" },
          }}
        >
          <ThemedText type="link">Change id</ThemedText>
        </Link>
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/(tabs)/home2/world/[id]/overview",
              params: { id: "bar" },
            })
          }
        >
          <ThemedText type="link">Change id callback</ThemedText>
        </Pressable>
      </ThemedView>
    </ScrollView>
  );
};

export default Overview;
