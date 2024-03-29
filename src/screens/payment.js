import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import COLORS from "../components/color";

const Payment = ({ navigation }) => {
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }
    const goBack = () => {
        navigation.navigate('MainTabs');
    }
    const order = () => {
        navigation.navigate('MainTabs', { screen: 'My Order' });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
            <TouchableWithoutFeedback onPress={onCancel} style={{ flex: 1 }}>
                <View style={{ marginTop: 20, marginHorizontal: 40 }}>
                    <TouchableOpacity onPress={goBack} style={{ width: 50, height: 50, borderRadius: 50, borderColor: '#AEAEAE', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require("../assets/arrow-left.png")} />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', marginTop: 150 }}>


                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={require("../assets/check.png")} />
                            <View>
                                <Text style={{ fontSize: 35, fontWeight: 700, color: '#000', marginTop: 15, textAlign: 'center' }}>
                                    Your order is successfully done
                                </Text>
                                <Text style={{ fontSize: 21, color: '#000', marginTop: 20, textAlign: 'center' }}>
                                    You can track the delivery in the “My Orders” section.</Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={order} style={{ marginTop: 100, backgroundColor: COLORS.primary, borderRadius: 15, padding: 10, height: 45, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }} >
                            <Text style={{ color: 'white', }}>View Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 45, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <Text style={{ fontSize: 15, color: COLORS.primary, }}>View E-Receipt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Payment;