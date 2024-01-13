import React from "react";
import {Text, View} from "react-native"
// Styles
const styles = {
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
  },
  "1col": {
    backgroundColor: "lightblue",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 1,
  },
  "2col": {
    backgroundColor: "green",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2,
  },
  "3col": {
    backgroundColor: "orange",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3,
  },
  "4col": {
    flex: 4,
  },
};

// RN Code
const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const App = () => {
  return (
    <View style={styles.app}>
      {/* Header */}
      <Row>
        <Col numRows={1}>
          <Text>First column</Text>
        </Col>
        <Col numRows={3}>
          <Text>Second Column</Text>
        </Col>
      </Row>
      <View>
        <Row>
          <Col numRows={1}>
            <Text>Main square</Text>
          </Col>
        </Row>
        <Row>
          <Col numRows={3}>
            <Text>First column</Text>
          </Col>
          <Col numRows={3}>
            <Text>Second column</Text>
          </Col>
          <Col numRows={3}>
            <Text>Third column</Text>
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col numRows={1}>
            <Text>Blue footer</Text>
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <Text>Light blue footer</Text>
          </Col>
        </Row>
      </View>
    </View>
  );
}
export default App