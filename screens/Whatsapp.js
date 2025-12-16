import { Text, View, StyleSheet } from "react-native";

export default function WhatsApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WhatsApp</Text>
      <Text style={styles.subtitle}>Connect and chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f5e8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#25d366",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});