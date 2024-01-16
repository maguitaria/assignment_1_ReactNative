import React from "react";
import { Text, View, Dimensions, Button, Image } from "react-native";
import styles from "./styles";

const screenWidth = Dimensions.get("window").width;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.roundedContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require("./assets/adaptive-icon.png")}
              style={styles.icon}
            />
          </View>
          <View style={styles.tickContainer}>
            <Text style={styles.tick}>✓</Text>
          </View>
        </View>

        <Text style={styles.textSmall}>
          Sent successfully to <strong>Lela Crawford</strong>
        </Text>

        <View style={styles.profileContainer}>
          <View style={styles.roundedContainer}>
            <Image
              source={require("./assets/favicon.png")}
              style={styles.icon}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.textSmall}>
              <strong>John Crawford</strong>
            </Text>
            <Text style={styles.textSmall}>John123@gmail.com</Text>
          </View>
        </View>

        {/* Centered amount */}
        <View style={styles.centeredAmount}>
          <Text style={styles.amount}>$100.00</Text>
        </View>
<br/>
       <View style={{
            height: 2,
            backgroundColor: '#eeeeee',
            alignSelf: 'stretch'
        }} />

        <Text style={styles.textSmall}>
          Sent successfully to <strong>12 January 2018.</strong> <br/> Your reference
          number is 98920852
        </Text>

        {/* "Continue" button at the end */}
        <View style={styles.buttonContainer}>
          <Button title="Continue" style={styles.button} />
        </View>
      </View>
    </View>
  );
};

export default App;
