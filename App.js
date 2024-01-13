import React from "react";
import { Text, View } from "react-native";

// Styles
const styles = {
  app: {
    flex: 1,
    marginHorizontal: "auto"
  },
  headerFooterRow: {
    flex: 1, 
  },
  mainRow: {
    flex: 3, 
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  col: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  smallCol: {
    flex: 1, 
    backgroundColor: "lightblue",
  },
  largeCol: {
    flex: 2, 
    backgroundColor: "blue",
  },
};

const Col = ({ style, children }) => {
  return <View style={[styles.col, style]}>{children}</View>;
};

const Row = ({ style, children }) => (
  <View style={[styles.row, style]}>{children}</View>
);

const App = () => {
  return (
    <View style={styles.app}>
      {/* Header */}
      <Row style={styles.headerFooterRow}>
        <Col style={styles.smallCol}>
          <Text>Left column</Text>
        </Col>
        <Col style={styles.largeCol}>
          <Text>Right Column</Text>
        </Col>
      </Row>
      {/* Main Content */}
      <Row style={styles.mainRow}>
        <Col style={{ backgroundColor: "lightgreen" }}>
          <Text>Main square</Text>
        </Col>
      </Row>
      {/* Three Columns */}
      <Row>
        <Col style={{ backgroundColor: "green" }}>
          <Text>First column</Text>
        </Col>
        <Col style={{ backgroundColor: "lightgreen" }}>
          <Text>Second column</Text>
        </Col>
        <Col style={{ backgroundColor: "green" }}>
          <Text>Third column</Text>
        </Col>
      </Row>
      {/* Footer 1 */}
      <Row style={styles.headerFooterRow}>
        <Col style={{ backgroundColor: "lightblue" }}>
          <Text>First Footer</Text>
        </Col>
      </Row>
      {/* Footer 2 */}
      <Row style={styles.headerFooterRow}>
        <Col style={{ backgroundColor: "blue" }}>
          <Text>Second Footer</Text>
        </Col>
      </Row>
    </View>
  );
};

export default App;
