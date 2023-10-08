import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  PixelRatio,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";

const Slider = (props: any) => {
  const styles = StyleSheet.create({
    paginationWrapper: {
      position: "absolute",
      bottom: 100,
      left: 0,
      right: 0,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      ...props.paginationWrapper,
    },
    paginationDots: {
      height: 10,
      width: 10,
      backgroundColor: "#E50815",
      marginLeft: 10,
      borderRadius: 50,
      ...props.paginationDots,
    },
  });

  // Intializing Usestates
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");

  // Initializing Refrence for scrollview

  const scrollRef = useRef<ScrollView>(null);

  // Increasing slider page when index of page changes
  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;

    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  // Extracting page number from slider state
  const { currentPage: pageIndex } = sliderState;

  // automatically changing page after time interval
  // ...

  const onNextPress = () => {
    const nextPage = pageIndex + 1;

    if (scrollRef.current) {
      if (nextPage > props.numOfPages - 1) {
        const offSetX = 0;
        scrollRef.current.scrollTo({ x: offSetX, animated: true });
        setSliderState({
          currentPage: 0,
        });
      } else {
        const offSetX = nextPage * width;
        scrollRef.current.scrollTo({ x: offSetX, animated: true });
        setSliderState({
          currentPage: nextPage,
        });
      }
    }
  };

  // ...

  useEffect(() => {
    const slideTimer = setInterval(() => {
      onNextPress();
    }, 3000);

    return () => clearInterval(slideTimer);
  });

  return (
    <>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}
      >
        {props.children}
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(props.numOfPages).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              { opacity: pageIndex === index ? 1 : 0.2 },
            ]}
            key={index}
          />
        ))}
      </View>
    </>
  );
};

export default Slider;
