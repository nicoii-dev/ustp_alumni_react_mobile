import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3.5;

const Carousel = ({images}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [newImages, setNewImages] = React.useState([]);

  React.useEffect(() => {
    // Add empty items to create fake space
    // [empty_item, ...movies, empty_item]
    setNewImages([{key: 'empty-left'}, ...images, {key: 'empty-right'}]);
  }, [images]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={newImages}
        keyExtractor={(item, index) => index}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          if (item.key) {
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          }
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          return (
            <View style={{width: ITEM_SIZE}}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2.5,
                  //alignItems: 'center',
                  transform: [{translateY}],
                  borderRadius: 0,
                  width: widthPercentageToDP('80%'),
                  marginBottom: widthPercentageToDP(30),
                }}>
                <FastImage
                  source={item}
                  style={styles.posterImage}
                  // resizeMethod="auto"
                  resizeMode="contain"
                />
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  posterImage: {
    width: '100%',
    height: heightPercentageToDP(30),
  },
});
