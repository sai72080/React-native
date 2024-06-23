// ButtonsScreen.js

import React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import MyCustomButton from "../components/MyCustomButton";
import { Buttons } from "../components/Buttons";

const ButtonScreen = ({ navigation }) => {
  const handlePress = (buttonTitle) => {
    // Example alert message for button press
    console.log(`Pressed ${buttonTitle}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <ButtonComponent
          title="Primary Button"
          btnKind="rounded"
          variant="primary"
          size="md"
          onPress={() => handlePress("Primary Button")}
        />
        <ButtonComponent
          title="Outlined Button"
          btnKind="outlined"
          variant="secondary"
          size="md"
          onPress={() => handlePress("Outlined Button")}
        />
        <ButtonComponent
          title="Success Button"
          btnKind="rounded"
          variant="success"
          size="md"
          onPress={() => handlePress("Success Button")}
        />
        <ButtonComponent
          title="Danger Button"
          btnKind="outlined"
          variant="danger"
          size="md"
          onPress={() => handlePress("Danger Button")}
        />
        <ButtonComponent
          title="Info Button"
          btnKind="rounded"
          variant="info"
          size="md"
          onPress={() => handlePress("Info Button")}
        />
        <ButtonComponent
          title="Warning Button"
          btnKind="outlined"
          variant="warning"
          size="md"
          onPress={() => handlePress("Warning Button")}
        />
        <ButtonComponent
          title="Dark Button"
          btnKind="rounded"
          variant="dark"
          size="md"
          onPress={() => handlePress("Dark Button")}
        />
        <ButtonComponent
          title="Light Button"
          btnKind="outlined"
          variant="light"
          size="md"
          onPress={() => handlePress("Light Button")}
        />
        <MyCustomButton
          icon="camera"
          onPress={() => handlePress("Custom Button 1")}
        />
        <MyCustomButton
          load={true}
          onPress={() => handlePress("Custom Button 2")}
        />
      </View>
      <Buttons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default ButtonScreen;
