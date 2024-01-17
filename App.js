import React from "react";
import { Text, View, Dimensions, Button, Image } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-web";

const screenWidth = Dimensions.get("window").width;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.roundedContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faCheckCircle} size={32} color="green" />
          </View>
          <View style={styles.tickContainer}>
            <Text style={styles.tick}>✓</Text>
          </View>
        </View>

        <View style={styles.userDetails}>
          <Text style={styles.textSmall}>
            Sent successfully to <strong>Lela Crawford</strong>
          </Text>
        </View>

        <Text style={styles.amount}>$100.00</Text>

        {/* User details */}
        <View style={styles.userDetails}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://placehold.co/48x48" }}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>John Crawfood</Text>
            <Text style={styles.userEmail}>John123@gmail.com</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              height: 2,
              backgroundColor: "#eeeeee",
              alignSelf: "stretch",
              padding: 2
            }}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.textSmall}>
            Sent successfully on{" "}
            <Text style={{ fontWeight: "bold" }}>12 January 2018.</Text>
            {"\n"}Your reference number is 98920852
          </Text>
        </View>

        {/* "Continue" button at the end */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity title="Continue" style={styles.continueButton} />
        </View>
      </View>
    </View>
  );
};

export default App;
