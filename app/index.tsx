import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";

const Start: React.FC = () => {
  return (
    <SafeAreaView>
      <ThemedView>
        <Link
          href={{
            pathname: "/(tabs)/home/[settings]/overview",
            params: { settings: "[settings]" },
          }}
        >
          <ThemedText type="link">Go to overview</ThemedText>
        </Link>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Start;
