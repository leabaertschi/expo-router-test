import {
    Link,
    router,
    useGlobalSearchParams,
    useLocalSearchParams,
} from "expo-router";
import React from "react";
import { Pressable, ScrollView } from "react-native";
import { ThemedText } from "../../../../components/ThemedText";
import { ThemedView } from "../../../../components/ThemedView";

const Overview: React.FC = () => {
  const { settings } = useGlobalSearchParams();
  const { settings: local } = useLocalSearchParams();
  return (
    <ScrollView>
      <ThemedView>
        <ThemedText>Settings params route:</ThemedText>
        <ThemedText>Global: {settings}</ThemedText>
        <ThemedText>Local: {local}</ThemedText>
      </ThemedView>
      <ThemedView>
        <Link
          href={{
            pathname: "/(tabs)/home/[settings]/overview",
            params: { settings: "foo" },
          }}
        >
          <ThemedText type="link">Change settings</ThemedText>
        </Link>
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/(tabs)/home/[settings]/overview",
              params: { settings: "bar" },
            })
          }
        >
          <ThemedText type="link">Change settings callback</ThemedText>
        </Pressable>
      </ThemedView>
    </ScrollView>
  );
};

export default Overview;
