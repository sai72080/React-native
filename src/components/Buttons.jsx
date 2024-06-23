import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text } from "react-native";
const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={() => console.log("facebook sign in")}
  >
    Login with Facebook
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: "Arial", fontSize: 15 }}>
      Login with Facebook
    </Text>
  </Icon.Button>
);

export function Buttons() {
  return <View>{myButton}</View>;
}
