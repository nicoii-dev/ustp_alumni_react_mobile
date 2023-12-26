/* eslint-disable react/prop-types */
import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  regions,
  provinces,
  cities,
  barangays,
} from 'select-philippines-address';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import TextInputController from '../../../components/input/text-input/TextInputController';

const AddressComponent = ({
  control,
  errors,
  setBarangayCode,
  setCityCode,
  setProvinceCode,
  setRegionCode,
  setBarangayText,
  setCityText,
  setProvinceText,
  setRegionText,
  regionCode,
  provinceCode,
  cityCode,
  barangayCode,
}) => {
  const [regionData, setRegion] = useState([]);
  const [provinceData, setProvince] = useState([]);
  const [cityData, setCity] = useState([]);
  const [barangayData, setBarangay] = useState([]);

  const regionFunc = () => {
    regions().then(response => {
      setRegion(
        response.map(data => ({
          id: data.id,
          code: data.region_code,
          value: data.region_code,
          label: data.region_name,
        })),
      );
    });
    setCity([]);
    setBarangay([]);
    setCityText('');
    setCityCode('');
    setBarangayText('');
    setBarangayCode('');
  };

  const provinceFunc = e => {
    setRegionCode(e);
    setRegionText(regionData.find(elem => elem.value === e).label);
    provinces(e).then(response => {
      setProvince(
        response.map(data => ({
          value: data.province_code,
          label: data.province_name,
        })),
      );
      setCity([]);
      setBarangay([]);
      setCityText('');
      setCityCode('');
      setBarangayText('');
      setBarangayCode('');
    });
  };

  const cityFunc = e => {
    setProvinceCode(e);
    setProvinceText(provinceData.find(elem => elem.value === e)?.label);
    cities(e).then(response => {
      setCity(
        response.map(data => ({
          value: data.city_code,
          label: data.city_name,
        })),
      );
    });
  };

  const barangayFunc = e => {
    setCityCode(e);
    setCityText(cityData.find(elem => elem.value === e)?.label);
    barangays(e).then(response => {
      setBarangay(
        response.map(data => ({
          value: data.brgy_code,
          label: data.brgy_name,
        })),
      );
    });
  };

  const brgyFunc = e => {
    setBarangayCode(e);
    setBarangayText(barangayData.find(elem => elem.value === e)?.label);
  };

  useEffect(() => {
    regionFunc();
  }, []);

  return (
    <>
      <View style={{marginTop: 20}}>
        <View style={{alignItems: 'center'}}>
          {/* header title for personal info */}
          <Text
            style={[
              {
                fontSize: 18,
                fontFamily: 'Manrope-Regular',
                width: '100%',
                color: 'black',
              },
            ]}>
            Region
          </Text>

          <View>
            <Picker
              selectedValue={regionCode}
              onValueChange={provinceFunc}
              style={[{width: widthPercentageToDP('90%')}]}
              itemStyle={{height: 88}}>
              {regionData.map((option, index) => {
                return (
                  <Picker.Item
                    label={option.label}
                    value={option.value}
                    key={index}
                    style={{fontFamily: 'Manrope-Regular'}}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          {/* header title for personal info */}
          <Text
            style={[
              {
                fontSize: 18,
                fontFamily: 'Manrope-Regular',
                width: '100%',
                color: 'black',
              },
            ]}>
            Province
          </Text>
          <View>
            <Picker
              selectedValue={provinceCode}
              onValueChange={cityFunc}
              style={[{width: widthPercentageToDP('90%')}]}
              itemStyle={{height: 88}}>
              {provinceData.map((option, index) => {
                return (
                  <Picker.Item
                    label={option.label}
                    value={option.value}
                    key={index}
                    style={{fontFamily: 'Manrope-Regular'}}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          {/* header title for personal info */}
          <Text
            style={[
              {
                fontSize: 18,
                fontFamily: 'Manrope-Regular',
                width: '100%',
                color: 'black',
              },
            ]}>
            City
          </Text>
          <View>
            <Picker
              selectedValue={cityCode}
              onValueChange={barangayFunc}
              style={[{width: widthPercentageToDP('90%')}]}
              itemStyle={{height: 88}}>
              {cityData.map((option, index) => {
                return (
                  <Picker.Item
                    label={option.label}
                    value={option.value}
                    key={index}
                    style={{fontFamily: 'Manrope-Regular'}}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          {/* header title for personal info */}
          <Text
            style={[
              {
                fontSize: 18,
                fontFamily: 'Manrope-Regular',
                width: '100%',
                color: 'black',
              },
            ]}>
            Barangay
          </Text>
          <View>
            <Picker
              selectedValue={barangayCode}
              onValueChange={brgyFunc}
              style={[{width: widthPercentageToDP('90%')}]}
              itemStyle={{height: 88}}>
              {barangayData.map((option, index) => {
                return (
                  <Picker.Item
                    label={option.label}
                    value={option.value}
                    key={index}
                    style={{fontFamily: 'Manrope-Regular'}}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      </View>
      <TextInputController
        headerTitle={'Street'}
        control={control}
        name={'street'}
        placeholder={'Street'}
        errorMessage={errors?.street?.message}
        errorStyle={{color: 'red'}}
      />
      <TextInputController
        headerTitle={'Zip Code'}
        control={control}
        name={'zipcode'}
        placeholder={'Zip Code'}
        errorMessage={errors?.zipcode?.message}
        errorStyle={{color: 'red'}}
      />
    </>
  );
};

export default AddressComponent;
