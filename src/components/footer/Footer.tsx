import { View, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const Footer = (_props: any) => {
  return (
    <View style={{
        bottom: 0,
        position: 'absolute',
        height: heightPercentageToDP(10),
        width: widthPercentageToDP('100%'),
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }}>
      {_props.children}
    </View>
  )
}

export default Footer