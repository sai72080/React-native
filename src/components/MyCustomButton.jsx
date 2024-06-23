import * as React from "react";
import { Button } from "react-native-paper";
const MyCustomButton = ({icon = "camera",load=false}) => (
  <Button loading={load} rippleColor={"lightpink"} buttonColor={"violet"} icon={icon} mode="contained" onPress={() => console.log("Pressed")}>
    Press me
  </Button>
);

export default MyCustomButton;
