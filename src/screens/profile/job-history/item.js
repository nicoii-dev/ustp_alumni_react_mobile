/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import _ from 'lodash';
import itemStyle from './itemStyle';
import COLORS from '../../../config/constants/colors';
import {useNavigation} from '@react-navigation/native';
import GenericOverlay from '../../../components/overlay';
import ButtonComponent from '../../../components/input/button/ButtonComponent';
import {DeleteJobHistory} from '../../../library/api/jobHistoryApi';
import {useDispatch} from 'react-redux';
import {loadingStart, loadingFinish} from '../../../store/loader/LoaderSlice';

const JobHistoryItem = ({
  id,
  company,
  position,
  dateStarted,
  dateEnded,
  salary,
  status,
  onRefresh,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const Delete = async () => {
    dispatch(loadingStart());
    try {
      const response = await DeleteJobHistory(id);
      console.log(response);
      dispatch(loadingFinish());
      if (!_.isUndefined(response)) {
        Toast.showWithGravity(
          'Job history successfully deleted.',
          Toast.LONG,
          Toast.CENTER,
        );
        onRefresh();
        return setIsVisible(false);
      }
      3;
    } catch (error) {
      console.log(error);
      dispatch(loadingFinish());
    }

    dispatch(loadingFinish());
  };
  return (
    <View style={itemStyle.viewContainer}>
      <View style={{flexDirection: 'row', gap: 5}}>
        <View>
          <Text style={itemStyle.itemData}>
            {`Company:\n`}
            {`Position:\n`}
            {`Date Started:\n`}
            {`Date Ended:\n`}
            {`Salary:\n`}
            {`Status:\n`}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              fontSize: 15,
              color: 'black',
              textTransform: 'capitalize',
            }}>
            {`${company}\n`}
            {`${position}\n`}
            {`${dateStarted} \n`}
            {`${dateEnded} \n`}
            {`${salary} \n`}
            {`${status} \n`}
          </Text>
        </View>
        <Icon
          name={'edit'}
          size={25}
          color={COLORS.navyBlue}
          style={{position: 'absolute', right: 30, top: 0}}
          onPress={() =>
            navigation.navigate('UpdateJobHistoryScreen', {jobId: id})
          }
        />
        <Icon
          name={'delete'}
          size={25}
          color={COLORS.navyBlue}
          style={{position: 'absolute', right: 0, top: 0}}
          onPress={() => {
            setIsVisible(true);
            console.log(1);
          }}
        />
        <GenericOverlay
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          title={'Are you sure you want to delete this job history?'}>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 5}}>
            <ButtonComponent
              onPress={() => setIsVisible(false)}
              color={COLORS.DARK_BLUE}
              size="lg"
              styles={{}}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Manrope-Bold',
                  width: 50,
                  textAlign: 'center',
                }}>
                Close
              </Text>
            </ButtonComponent>
            <ButtonComponent
              onPress={() => Delete()}
              color={COLORS.red}
              size="lg"
              styles={{}}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Manrope-Bold',
                  width: 50,
                  textAlign: 'center',
                }}>
                Delete
              </Text>
            </ButtonComponent>
          </View>
        </GenericOverlay>
      </View>
    </View>
  );
};

export default JobHistoryItem;
