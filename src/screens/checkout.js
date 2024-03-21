import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import COLORS from "../components/color";

const Checkout = ({ navigation }) => {
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}> 
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={{ marginHorizontal: 20, marginTop: 45, flexDirection: 'column', rowGap: 25 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, borderRadius: 50, borderColor: '#AEAEAE', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../assets/arrow-left.png")} />
                        </View>
                        <Text style={{ color: '#ADADAD', marginLeft: 85, fontSize: 23, color: '#000' }}>Checkout</Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#ADADAD', fontSize: 18, color: '#000' }}>Use Easy Grocery Pay</Text>
                            <TouchableOpacity>
                                <Image source={require('../assets/on-off-toggle.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', borderRadius: 15, backgroundColor: '#E6E6E6', height: 50, marginTop: 12, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }}>
                            <TextInput
                                onFocus={() => setFocus(true)}
                                placeholder='Your current balance'
                                placeholderTextColor='#B6B6B6'
                                style={{ flex: 1 }} />
                            <Text style={{ color: '#B6B6B6' }}>USA 444.63</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: COLORS.line }} />
                    <View>
                        <Text style={{ fontSize: 20, color: '#000' }}>Pay With</Text>
                        <View style={{ flexDirection: 'column', rowGap: 20, marginTop: 20 }}>
                            <TouchableOpacity style={{height:50,borderWidth:1,borderColor:'#27346A',borderRadius:15,paddingLeft:20,justifyContent:'center'}}>
                                <Image />
                                <View style={{flexDirection:'row'}}>
                                    <Text>Cash on delivery</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Checkout;