import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import COLORS from "../components/color";

const Checkout = ({ navigation }) => {
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }
    const nextPage = () => {
        navigation.navigate('Payment');
    }
    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={{ marginHorizontal: 20, marginTop: 45, flexDirection: 'column', rowGap: 25 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={goBack} style={{ width: 50, height: 50, borderRadius: 50, borderColor: '#AEAEAE', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../assets/arrow-left.png")} />
                        </TouchableOpacity>
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
                            <TouchableOpacity style={{ height: 50, borderWidth: 1, borderColor: '#27346A', borderRadius: 15, paddingLeft: 20, alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ height: 25, width: 25, borderRadius: 25, borderWidth: 2.8, borderColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ height: 13.4, width: 13.4, borderRadius: 13.4, backgroundColor: COLORS.primary }}></View></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                    <Image source={require('../assets/cash.png')} />
                                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                        <Text style={{ fontWeight: 600, color: '#B6B6B6', fontSize: 16 }}>Cash on delivery</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 50, borderWidth: 1, borderColor: '#27346A', borderRadius: 15, paddingLeft: 20, alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ height: 25, width: 25, borderRadius: 25, borderWidth: 3, borderColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' }}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                    <Image source={require('../assets/kart.png')} />
                                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                        <Text style={{ fontWeight: 600, color: '#B6B6B6', fontSize: 16 }}>Add Card</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 50, borderWidth: 1, borderColor: '#27346A', borderRadius: 15, paddingLeft: 20, alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ height: 25, width: 25, borderRadius: 25, borderWidth: 3, borderColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' }}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                    <Image source={require('../assets/paypal.png')} />
                                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                        <Text style={{ fontWeight: 600, color: '#B6B6B6', fontSize: 16 }}>Paypall</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: COLORS.line }} />
                    <View>
                        <View style={{ backgroundColor: '#F9F9F9', borderRadius: 15, borderColor: '#E8E8E8', borderWidth: 1, paddingHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextInput
                                placeholder="PROMO CODE"
                                placeholderTextColor='#B6B6B6'
                                style={{ flex: 1 }}
                            />
                            <TouchableOpacity style={{ width: 60, height: 40, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary }}>
                                <Text style={{ color: '#fff', fontWeight: 300 }}>APPLY</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20, rowGap: 10 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ color: '#B6B6B6', fontWeight: 500, fontSize: 16 }}>Sub-total</Text>
                                    <Text style={{ color: '#B6B6B6', fontWeight: 500, fontSize: 16 }}>Delivery fee</Text>
                                    <Text style={{ color: '#B6B6B6', fontWeight: 500, fontSize: 16 }}>Tax</Text>
                                    <Text style={{ color: '#B6B6B6', fontWeight: 500, fontSize: 16 }}>Discount</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontWeight: 500, fontSize: 16, textAlign: 'right' }}>$120.00</Text>
                                    <Text style={{ color: '#000', fontWeight: 500, fontSize: 16, textAlign: 'right' }}>$05.00</Text>
                                    <Text style={{ color: '#000', fontWeight: 500, fontSize: 16, textAlign: 'right' }}>$00.00</Text>
                                    <Text style={{ color: '#000', fontWeight: 500, fontSize: 16, textAlign: 'right' }}>$-35.00</Text>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: COLORS.line }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 700, fontSize: 16 }}>Total Cost</Text>
                                <Text style={{ fontWeight: 700, fontSize: 16, color: '#000' }}>$90.00</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={nextPage} style={{marginTop:10, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: COLORS.primary, height: 60 }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Confirm Payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Checkout;