import { Dimensions } from "react-native";

// Get the screen dimensions
const screenWidth = Dimensions.get("window").width;
// Styles
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#406c6b",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  tickContainer: {
    backgroundColor: "#FFC0CB", // pink color
    width: 64, // Set the size of the tick container
    height: 64, // Set the size of the tick container
    borderRadius: 32, // half of the width and height to make it a circle
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: screenWidth * 0.7, // 80% of the screen width
    minHeight: 600, // Minimum height to ensure content is visible
    backgroundColor: "white",
    borderRadius: 15,
    padding: screenWidth * 0.07,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  roundedContainer: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    backgroundColor: "#FFF",
    position: "absolute",
    top: 85, // Adjust the top position as needed
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingEnd: 25,
  },
  iconContainer: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    backgroundColor: "#fbe4dc",
    borderRadius: 50,
    justifyContent: "space-around",
    alignItems: "center",
  },

  icon: {
    width: 60,
    height: 60,
    // Additional styles for your icon
  },
  tickContainer: {
    position: "absolute",
    top: 64,
    right: 10,
    width: 25,
    height: 25,
    backgroundColor: "#406c6c",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  tick: {
    fontSize: 24,
    color: "white",
  },
  textSmall: {
    top: screenWidth / 200,
    padding: screenWidth / 78,
    color: "black",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
  },
  // New styles for centered amount and button container
  centeredAmount: {
    alignItems: "center",
  },
  amount: {
    fontSize: 28,
    padding: 5,
    color: "#3F6C6C",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 16,
  },
  continueButton: {
    borderRadius: 20,
  },
  gradientButton: {
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
  profileContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center items vertically
  },
  detailsContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center items vertically
    paddingTop: 35,
    marginVertical: 10,
  },
  userDetails: {
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "500",
  },
  userEmail: {
    fontSize: 12,
    color: "gray",
  },

  profileInfo: {
    marginLeft: 10, // Adjust the margin as needed
  },
  separator: {
    height: 2,
    backgroundColor: "black",
    alignSelf: "stretch",
    marginVertical: 10,
  },
};
export default styles;
