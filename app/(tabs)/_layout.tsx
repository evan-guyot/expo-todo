import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarItemLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="list-check"
              style={focused && styles.focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 60,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  tabBarItem: {
    marginVertical: 2,
  },
  tabBarItemLabel: {
    display: "none",
  },
  focused: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 6,
    borderRadius: 30,
  },
});
