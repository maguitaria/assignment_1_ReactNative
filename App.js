import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Icon and Success Message */}
        <View style={styles.textCenter}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faCheckCircle} style={styles.checkIcon} />
          </View>
          <Text style={styles.successMessage}>
            Sent successfully to Lela Crawford
          </Text>
        
        </View>

        {/* Amount */}
        <Text style={styles.amount}>$100.00</Text>

        {/* User Details */}
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

        {/* Separator */}
        <View style={styles.separator} />

        {/* Transaction Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.textSmall}>
            Sent successfully on{" "}
            <Text style={styles.boldText}>12 January 2018.</Text>
            {"\n"}Your reference number is 98920852
          </Text>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton}>
            <LinearGradient
              colors={["rgba(255,138,101,1)", "rgba(255,114,94,1)"]} // Replace with your desired colors
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
