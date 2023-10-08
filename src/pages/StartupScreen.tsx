import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Slider from '../components/Slider';

interface StartupScreenProps {
  navigation: any;
}

const StartupScreen: React.FC<StartupScreenProps> = (props) => {
  const { width, height } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/netflix-logo.png')} resizeMode="contain" style={styles.logo} />
        <View style={styles.subContainer}>
          <Text style={styles.headerText}>Privacy</Text>
          <Text style={styles.headerText}>Help</Text>
        </View>
      </View>
      <Slider numOfPages={3}>
        <View style={{ width, height }}>
          <Image source={require('../../assets/images/img-1.jpg')} style={styles.imageStyle} />
          <View style={styles.wrapper}>
            <Text style={styles.header}>Watch on any device</Text>
            <Text style={styles.paragraph}>
              Stream on your phone, tablet, laptop and TV without playing more.
            </Text>
          </View>
        </View>
        <View style={{ width, height }}>
          <Image source={require('../../assets/images/img-2.jpg')} style={styles.imageStyle} />
          <View style={styles.wrapper}>
            <Text style={styles.header}>3,2,1...Download!</Text>
            <Text style={styles.paragraph}>Downloads only available on ad-free plans.</Text>
          </View>
        </View>
        <View style={{ width, height }}>
          <Image source={require('../../assets/images/img-3.jpg')} style={styles.imageStyle} />
          <View style={styles.wrapper}>
            <Text style={styles.header}>No pesky contracts</Text>
            <Text style={styles.paragraph}>Join today, cancel anytime.</Text>
          </View>
        </View>
      </Slider>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  subContainer: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(100),
    width: '100%',
  } as ImageStyle,
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal: 20,
    width: '75%',
    color: 'white',
  },
  paragraph: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#E50815',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
});
