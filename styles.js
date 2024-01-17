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
    marginBottom: 16,
  },

  card: {
    width: screenWidth * 0.7, // 80% of the screen width
    minHeight: 1000, // Minimum height to ensure content is visible
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

  iconContainer: {
    width: screenWidth * 0.15,
    height: screenWidth * 0.15,
    backgroundColor: "#fbe4dc",
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  textCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 60,
    height: 60,
  },

  textSmall: {
    top: screenWidth / 200,
    padding: screenWidth / 78,
    color: "grey",
    fontSize: 22,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#929292",
    margin: 10,
  },
  centeredAmount: {
    alignItems: "center",
  },
  amount: {
    fontSize: 45,
    padding: 5,
    color: "#3F6C6C",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%", // Set the button width to 100% of its container
    bottom: -85,
    justifyContent: "flex-end",
  },
  continueButton: {
    borderRadius: 20,
  },
  gradientButton: {
    paddingVertical: 12,

    borderRadius: 20,
  },
  checkIcon: {
    color: "#3F6C6C"
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
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
    width: 60,
    height: 56,
    borderRadius: 24,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "500",
  },
  userEmail: {
    fontSize: 20,
    color: "gray",
  },

  profileInfo: {
    marginLeft: 10, // Adjust the margin as needed
  },
  separator: {
    height: 2,
    backgroundColor: "#929292",
    alignSelf: "stretch",
    marginVertical: 25,
  },
};
export default styles;
