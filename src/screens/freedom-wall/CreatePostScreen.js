/* eslint-disable react/prop-types */
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Input} from '@rneui/themed';
import React, {useState, useEffect, useCallback} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import _ from 'lodash';
import {launchImageLibrary} from 'react-native-image-picker';
// components
import UstpImages from '../../config/images/ustp-images';
import COLORS from '../../config/constants/colors';
// api
import {CreatePost} from '../../library/api/postApi';
import {useStorage} from '../../library/storage/Storage';
import {USER} from '../../library/constants';
import Header from '../../components/header/Header';
import {loadingStart, loadingFinish} from '../../store/loader/LoaderSlice';

const CreatePostScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [postText, setPostText] = useState('');
  const [postImages, setPostImages] = useState([]);

  const [user, setUser] = useState(null);

  const getUser = useCallback(async () => {
    const data = await useStorage.getItem(USER.USER_DATA);
    setUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const postTextChange = e => {
    setPostText(e);
  };

  const pickImage = async () => {
    launchImageLibrary({noData: true}, response => {
      let byte = 1048576; //1024 * 1024 byte conversion to mb binary
      if (response?.assets[0]?.fileSize / byte > 2) {
        return Toast.show('Image file size is too large.', Toast.SHORT);
      }
      if (response.assets) {
        const file = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
          size: response.assets[0].fileSize,
        };
        setPostImages([
          ...postImages,
          {file: file, imageUrl: response.assets[0].uri},
        ]);
      }
    });
  };

  const onSubmit = async () => {
    dispatch(loadingStart());
    const formData = new FormData();
    formData.append('title', postText);
    postImages.forEach(image_file => {
      console.log(image_file.file);
      formData.append('images[]', image_file.file);
    });
    try {
      const response = await CreatePost(formData);
      dispatch(loadingFinish());
      if (!_.isUndefined(response)) {
        Toast.showWithGravity('Posted successfully.', Toast.LONG, Toast.CENTER);
        return navigation.goBack();
      }
      3;
    } catch (error) {
      console.log(error);
      dispatch(loadingFinish());
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <Icon
          name={'arrow-back'}
          size={30}
          color={COLORS.navyBlue}
          style={{position: 'absolute', left: 30}}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              fontSize: 25,
              color: COLORS.navyBlue,
              textAlign: 'center',
            }}>
            Create Post
          </Text>
        </View>
        <TouchableOpacity
          onPress={onSubmit}
          disabled={_.isEmpty(postImages) && _.isEmpty(postText)}
          style={{
            position: 'absolute',
            right: 30,
            backgroundColor: COLORS.skyBlue,
            borderRadius: 5,
          }}>
          <View style={{padding: 5, paddingLeft: 10, paddingRight: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Post</Text>
          </View>
        </TouchableOpacity>
      </Header>
      <View
        style={{
          alignItems: 'flex-start',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            padding: 10,
            flexDirection: 'row',
          }}>
          <FastImage
            // @ts-ignore
            source={
              user?.image
                ? {uri: `http://localhost:8000/storage/${user.image}`}
                : UstpImages.ustpLogo
            }
            style={{
              height: hp(5),
              width: hp(5),
              borderRadius: 5,
            }}
            resizeMode="stretch"
          />
          <View style={{paddingLeft: 10}}>
            <Text
              style={{
                color: COLORS.black,
                fontFamily: 'Roboto-Bold',
                fontSize: 13,
                textTransform: 'capitalize',
              }}>
              {`${user?.first_name} ${user?.middle_name} ${user?.last_name}`}
            </Text>
          </View>
        </View>

        <Icon
          name={'insert-photo'}
          size={30}
          style={{
            borderRadius: 50,
            justifyContent: 'center',
            color: 'black',
            right: 5,
            top: 5,
          }}
          onPress={pickImage}
        />
      </View>
      <Input
        autoComplete="off"
        allowFontScaling={false}
        onChangeText={postTextChange}
        value={postText}
        placeholder={"What's on your mind?"}
        numberOfLines={10}
        multiline
        style={{
          fontSize: 16,
          marginVertical: -5,
          fontFamily: 'Manrope-Regular',
          textAlignVertical: 'top',
        }}
      />

      <FlatList
        data={postImages}
        renderItem={({item, index}) => (
          <>
            <FastImage
              key={index}
              source={{
                uri: item.imageUrl,
              }}
              style={{
                height: hp('25%'),
                width: '100%',
                backgroundColor: 'black',
                marginTop: 2,
              }}
              resizeMode="contain"
            />
            <View style={{borderWidth: 0.5}} />
          </>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CreatePostScreen;
