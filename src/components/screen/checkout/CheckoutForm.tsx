import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image';
import COLORS from '../../../config/constants/colors';

const CheckoutForm = () => {
    return (
        <>
            <View>
                <Text style={{ color: COLORS.black, fontSize: 16, fontFamily: "Roboto-Bold" }}>Email</Text>
                <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'mail'} size={25} style={{ color: COLORS.darkGray, position: 'absolute', left: 10 }} />
                    <TextInput
                        placeholder="xvend@gmail.com"
                        style={{
                            width: wp("90%"),
                            height: hp(6),
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: COLORS.black,
                            fontSize: 16,
                            color: COLORS.black,
                            padding: 10,
                            paddingLeft: wp(10)
                        }}
                    />
                </View>
                <Text style={{ color: COLORS.darkGray, fontFamily: "Roboto-Regular", fontSize: 12 }}>
                    Please fill in and confirm your email address. A confirmation email will be sent when your payment is confirmed.
                </Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: COLORS.black, fontSize: 16, fontFamily: "Roboto-Bold" }}>Card Number</Text>
                <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'card'} size={25} style={{ color: COLORS.darkGray, position: 'absolute', left: 10 }} />
                    <TextInput
                        placeholder="0000 0000 0000 0000"
                        style={{
                            width: wp("90%"),
                            height: hp(6),
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: COLORS.black,
                            fontSize: 16,
                            color: COLORS.black,
                            padding: 10,
                            paddingLeft: wp(10)
                        }}
                    />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: COLORS.black, fontSize: 16, fontFamily: "Roboto-Bold" }}>Cardholder's Name</Text>
                <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'card'} size={25} style={{ color: COLORS.darkGray, position: 'absolute', left: 10 }} />
                    <TextInput
                        placeholder="Cardholder's Name"
                        style={{
                            width: wp("90%"),
                            height: hp(6),
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: COLORS.black,
                            fontSize: 16,
                            color: COLORS.black,
                            padding: 10,
                            paddingLeft: wp(10)
                        }}
                    />
                </View>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: COLORS.black, fontSize: 16, fontFamily: "Roboto-Bold" }}>CVV</Text>
                    <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'card'} size={25} style={{ color: COLORS.darkGray, position: 'absolute', left: 10 }} />
                        <TextInput
                            placeholder="CVV"
                            style={{
                                width: wp("43%"),
                                height: hp(6),
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: COLORS.black,
                                fontSize: 16,
                                color: COLORS.black,
                                padding: 10,
                                paddingLeft: wp(10)
                            }}
                        />
                    </View>
                </View>

                <View>
                    <Text style={{ color: COLORS.black, fontSize: 16, fontFamily: "Roboto-Bold" }}>Expiry Date</Text>
                    <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'calendar'} size={25} style={{ color: COLORS.darkGray, position: 'absolute', left: 10 }} />
                        <TextInput
                            placeholder="01 / 01"
                            style={{
                                width: wp("43%"),
                                height: hp(6),
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: COLORS.black,
                                fontSize: 16,
                                color: COLORS.black,
                                padding: 10,
                                paddingLeft: wp(10)
                            }}
                        />
                    </View>
                </View>
            </View>
        </>
    );
}

export default CheckoutForm