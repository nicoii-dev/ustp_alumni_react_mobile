import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../../config/constants/colors";

function ShoppingCartIcon() {
    const cart = useSelector((store: any) => store.cart) //cartData is from root reducer
    const navigation = useNavigation();
    return (
        // @ts-ignore
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
            <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
                {cart?.products?.length > 0 ?
                    <View style={{
                        position: 'absolute',
                        height: 20,
                        width: 20,
                        borderRadius: 15,
                        backgroundColor: COLORS.red,
                        right: 5,
                        top: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 99,
                    }}>
                        <Text style={{ color: 'white', fontFamily: 'Roboto-Regular' }}>
                            {cart?.products?.length > 0 ? cart?.products?.length : 0}
                        </Text>
                    </View> : null}
                <Icon name="cart-outline" size={35} style={{color: "white"}} />
            </View>
        </TouchableOpacity>
    )
}


export default ShoppingCartIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
