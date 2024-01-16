import React from "react";
import { Text, View } from "react-native";

// Styles
const styles = {
  app: {
    flex: 1,
    marginHorizontal: "auto",
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
    backgroundColor: "#50c3f7",
  },
  largeCol: {
    flex: 2,
    backgroundColor: "#0293c4",
  },
};

const Col = ({ style }) => {
  return <View style={[styles.col, style]}></View>;
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
         
        </Col>
        <Col style={styles.largeCol}>
         
        </Col>
      </Row>
      {/* Main Content */}
      <Row style={styles.mainRow}>
        <Col style={{ backgroundColor: "#7cb342" }}>
       
        </Col>
      </Row>
      {/* Three Columns */}
      <Row>
        <Col style={{ backgroundColor: "green" }}>
         
        </Col>
        <Col style={{ backgroundColor: "lightgreen" }}>
         
        </Col>
        <Col style={{ backgroundColor: "green" }}>
         
        </Col>
      </Row>
      {/* Footer 1 */}
      <Row style={styles.headerFooterRow}>
        <Col style={{ backgroundColor: "#50c3f7" }}>
        
        </Col>
      </Row>
      {/* Footer 2 */}
      <Row style={styles.headerFooterRow}>
        <Col style={{ backgroundColor: "#0293c4" }}>
        
        </Col>
      </Row>
    </View>
  );
};

export default App;
