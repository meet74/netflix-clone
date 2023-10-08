import { SafeAreaView, StyleSheet, Text, View, Image,FlatList, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'
import { textColors } from '../../constant/Colors'
import { Feather,AntDesign, Entypo } from '@expo/vector-icons';
import { gettingMoviePosters } from '../../api';
import { imageAPIUrl, moviePosterApiUrl } from '../../constant/Urls';
import BottomSheet from '../../components/BottomSheet';

interface MovieData{
  title:string,
  poster_path:string
}

const HomePage: React.FC = () => {

  const [isBottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const [movieData, setMovieData] = useState([])

  useEffect(() => {
  
    load()
  }, [])
  

  const load= ()=>{
    fetch(moviePosterApiUrl).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then((responseJson) => {
     
      setMovieData(responseJson.results)
    }).catch(err=> {return err})

    
    
  } 

  
  return (
    <SafeAreaView style = {styles.mainContainer}>
      <ScrollView>
      <View style = {styles.header}>
      <Text style = {styles.nameHeaderText}>For Shriji :)</Text>
      <View style = {styles.iconHeaderContainer}>
      <Feather name="cast" size={24} color="white" />
      <AntDesign name="search1" size={24} color="white" />
      </View>
      </View>

      <View style = {styles.cardBox}>
      <Text style = {styles.headerCardText}>TV Shows based on Manga</Text>
       
          <FlatList
          data={movieData}
          horizontal
          renderItem={(({item,index}) => {
            const imageUrl = `${imageAPIUrl}${item.poster_path}`;
            
            return <TouchableOpacity onPress={toggleBottomSheet}>
              <View style = {index === 0 ? {...styles.cardContainer,margin:0}:styles.cardContainer}>
                <Image source={{uri:imageUrl}} style = {styles.imagePoster}/>
            </View>
            
            </TouchableOpacity>
          })}
          />
            
        
      </View>

      <View style = {styles.cardBox}>
      <Text style = {styles.headerCardText}>Continue Watching for  Shriji :)</Text>
       
          <FlatList
          data={movieData}
          horizontal
          renderItem={(({item,index}) => {
            const imageUrl = `${imageAPIUrl}${item.poster_path}`;
            
            return <View style = {index === 0 ? {...styles.continueCardBox,marginRight:10,marginTop:10}:styles.continueCardBox}>
                <Image source={{uri:imageUrl}} style = {styles.imagePoster}/>
                <View style = {index%2==0?styles.currnetLine:{...styles.currnetLine,width:"30%"}}/>
                <View style={styles.iconCardContainer}>
                <AntDesign name="infocirlceo" size={24} color={textColors.greyColor} />
                <Entypo name="dots-three-vertical" size={24} color={textColors.greyColor} />
                  </View>
            </View>
          })}
          />
            
        
      </View>

      <View style = {styles.cardBox}>
      <Text style = {styles.headerCardText}>Trending Now</Text>
       
          <FlatList
          data={movieData}
          horizontal
          renderItem={(({item,index}) => {
            const imageUrl = `${imageAPIUrl}${item.poster_path}`;
            
            return <View style = {index === 0 ? {...styles.cardContainer,margin:0}:styles.cardContainer}>
                <Image source={{uri:imageUrl}} style = {styles.imagePoster}/>
                
            </View>
          })}
          />
            
        
      </View>
      
      </ScrollView>
      <BottomSheet isVisible={isBottomSheetVisible} onClose={toggleBottomSheet} height = {Dimensions.get('screen').height}/>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"black"
  },
  commonSubTextStyle:{
    color:textColors.greyColor
  },
  nameHeaderText:{
    fontWeight:"bold",
    fontSize:30,
    color:"white",
    flex:4
  },
  header:{
    margin:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  iconHeaderContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    flex:2
  },
  headerCardText:{
    fontWeight:"bold",
    fontSize:22,
    margin:10,
    color:"white"  ,
    
  },
  imagePoster:{
    width:150,
    height:200,
    borderRadius:15,
    resizeMode:'cover'
  },
  cardContainer:{
    margin:5,
    backgroundColor:"#000",
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    borderRadius:10,
  },
  cardBox:{
    marginTop:15
  },
  continueCardBox:{
    backgroundColor:"#191919",
    width:150,
    height:250,
    margin:10,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    borderRadius:10,
  },
  currnetLine:{
    borderWidth:2,
    borderColor:"red",
    width:"100%"
  },
  iconCardContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10
  }
})