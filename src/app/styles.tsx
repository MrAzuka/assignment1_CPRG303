import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitleWrap: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#8e8e8e",
    marginTop: 2,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  // profile
  profileBlock: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  avatarPhoto: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#eee",
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
    justifyContent: "center",
  },
  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  username: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  verifiedBadge: {
    marginLeft: 6,
  },
  fullName: {
    fontSize: 14,
    color: "#0059b3",
    marginBottom: 8,
  },

  // Stats row
  statsRow: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "baseline",
    marginRight: 14,
  },
  statNumber: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
  statLabel: {
    fontSize: 14,
    color: "#000",
  },
  bioText: {
    fontSize: 14,
    color: "#0059b3",
    lineHeight: 19,
    alignItems: "center",
  },
});
