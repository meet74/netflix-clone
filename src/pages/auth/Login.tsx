import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageStyle,
  TextStyle,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface LoginProps {
  navigation: any;
}
const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const signUpSubmitHandler = () => {

    navigation.navigate("Home")
    // const body = {
    //   name,
    //   email
    // }
    // fetch("http://localhost:3000/users",{
    //   method:"POST",
    //   headers:{
    //     'Content-Type': 'application/json',
    //   },
    //   body:JSON.stringify(body)
    // }).then(res => {
    //   console.log(res);
      
    // }).catch(err => {
    //   console.log(err);
      
    // })
  };

  const onInputChange = (type: string, value: string) => {
    if (type === "name") {
      setname(value);
    } else if (type === "email") {
      setemail(value);
    } else if (type === "password") {
      setpassword(value);
    } else {
      setconfirmPassword(value);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topBarContainer}>
        <Ionicons
          onPress={() => navigation.pop()}
          name="chevron-back"
          size={26}
          color="white"
        />
        <Image
          source={require("../../../assets/images/netflix-logo.png")}
          style={styles.netflixLogo}
        />
        <Text style={styles.helpText}>Help</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(value: string) => onInputChange("name", value)}
            placeholder="Name"
            style={styles.input}
            placeholderTextColor={"#BBBBBB"}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(value: string) => onInputChange("email", value)}
            placeholder="Email or phone number"
            style={styles.input}
            placeholderTextColor={"#BBBBBB"}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(value: string) => onInputChange("password", value)}
            placeholder="Password"
            style={styles.input}
            placeholderTextColor={"#BBBBBB"}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(value: string) =>
              onInputChange("confirmpassword", value)
            }
            placeholder="Confirm Password"
            style={styles.input}
            placeholderTextColor={"#BBBBBB"}
          />
        </View>
        <TouchableOpacity onPress={signUpSubmitHandler} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        {/* <Text style = {styles.recoverPasswordText}>Recover Password</Text> */}
        <Text style={styles.extraText}>
          Sign up is protected by Google reCAPTCHA to ensure you are not a bot.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131313",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  topBarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",

    backgroundColor: "black",
  },
  netflixLogo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
  },
  helpText: {
    color: "white",
    fontWeight: "bold",
  },
  mainContainer: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#BBBBBB",
    fontSize: 17,
  },
  inputContainer: {
    backgroundColor: "#333333",
    width: "80%",
    height: 50,
    marginVertical: 15,
    justifyContent: "center",
    paddingLeft: 15,
  },
  input: {
    color: "white",
  },
  recoverPasswordText: {
    color: "#BBBBBB",
    alignSelf: "center",
    margin: 25,
    fontWeight: "bold",
  },
  extraText: {
    alignSelf: "center",
    color: "#BBBBBB",
    margin: 25,
    textAlign: "center",
  },
});

export default Login;
