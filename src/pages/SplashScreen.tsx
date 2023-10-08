import { StyleSheet, Image, SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'


const SplashScreen = (props:any) => {
    useEffect(() => {
      setTimeout(() => {
        props.navigation.navigate("Start")
      }, 4000);
    }, [])
    
  
  return (
    <SafeAreaView style = {styles.container}>
      <Image
        resizeMode='cover'
        style={styles.video}
        source={require("../../assets/videos/Netflix_Animation.gif")}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems:"center",
        justifyContent:"center",
        height:"100%"
      },
      video: {
       width:"100%",
       height:"100%"
      },
})

export default SplashScreen

