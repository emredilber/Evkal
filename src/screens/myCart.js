import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import COLORS from "../components/color";

const MyCart = ({ navigation }) => {
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={onCancel} >
                <View style={{ marginHorizontal: 40, marginTop: 45 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, borderRadius: 50, borderColor: '#AEAEAE', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../assets/arrow-left.png")} />
                        </View>
                        <Text style={{ color: '#ADADAD', marginLeft: 45, fontSize: 23, color: '#000' }}>Rewiev Summary</Text>
                    </View>

                    <View style={{ marginTop: 40, flexDirection: 'column', rowGap: 20 }}>
                        <View style={{ backgroundColor: '#F0F0F0', borderRadius: 15, }}>
                            <View style={{ top: 0, left: 0, backgroundColor: COLORS.primary, paddingHorizontal: 10, paddingVertical: 2, borderTopLeftRadius: 15, borderBottomRightRadius: 15, position: 'absolute' }}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>-35%</Text>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginHorizontal: 15, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../assets/orange.png')} style={{ width: 90, height: 90 }} />
                                    <View style={{ marginLeft: 10, }}>
                                        <Text style={{ fontSize: 15, color: '#000', fontWeight: 500 }}>Orange</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                            <Text style={{ fontSize: 15, color: '#000', fontWeight: 500 }}>35$</Text>
                                            <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: 500, marginLeft: 5 }}>/5 kg</Text>
                                            <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: 500, marginLeft: 5, textDecorationLine: 'line-through' }}>10$ /1 kg</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ borderRadius: 6, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.primary }}>
                                    <Text style={{ fontSize: 16, color: '#fff', }}>5</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#F0F0F0', borderRadius: 15, }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginHorizontal: 15, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../assets/chary.png')} style={{ width: 90, height: 90 }} />
                                    <View style={{ marginLeft: 10, }}>
                                        <Text style={{ fontSize: 15, color: '#000', fontWeight: 500 }}>Charry</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                            <Text style={{ fontSize: 15, color: '#000', fontWeight: 500 }}>8$</Text>
                                            <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: 500, marginLeft: 5 }}>/500 g</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ borderRadius: 6, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.primary }}>
                                    <Text style={{ fontSize: 16, color: '#fff', }}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#F0F0F0', borderRadius: 15, }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginHorizontal: 15, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../assets/tomatoes2.png')} style={{ width: 90, height: 90 }} />
                                    <View style={{ marginLeft: 10, }}>
                                        <Text style={{ fontSize: 15, color: '#000', fontWeight: 500 }}>Tomatoes</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                            <Text style={{ fontSize: 15, color: '#000', fontWeight: 500 }}>6$</Text>
                                            <Text style={{ fontSize: 12, color: '#BCBCBC', fontWeight: 500, marginLeft: 5 }}>/500 g</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ borderRadius: 6, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.primary }}>
                                    <Text style={{ fontSize: 16, color: '#fff', }}>1</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, rowGap: 20 }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', rowGap: 4 }}>
                                <Text style={{ color: '#BCBCBC', fontSize: 16, fontWeight: 500 }}>Order Date</Text>
                                <Text style={{ color: '#BCBCBC', fontSize: 16, fontWeight: 500 }}>Promo Code</Text>
                                <Text style={{ color: '#BCBCBC', fontSize: 16, fontWeight: 500 }}>Delivery Date</Text>
                                <Text style={{ color: '#BCBCBC', fontSize: 16, fontWeight: 500 }}>Delivery Time</Text>
                            </View>
                            <View style={{ flexDirection: 'column', rowGap: 4 }}>
                                <Text style={{ color: '#454545', fontSize: 16, textAlign: 'right', fontWeight: 500 }}>Sep18, 2023 | 10:00 AM</Text>
                                <Text style={{ color: '#454545', fontSize: 16, textAlign: 'right', fontWeight: 500 }}>DISC10OFF</Text>
                                <Text style={{ color: '#454545', fontSize: 16, textAlign: 'right', fontWeight: 500 }}>SEP 19, 2023</Text>
                                <Text style={{ color: '#868686', fontSize: 16, textAlign: 'right', fontWeight: 500 }}>01:00 AM - 08:00 AM</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: COLORS.line, height: 1 }} />
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', rowGap: 4 }}>
                                <Text style={{ color: '#BCBCBC', fontSize: 16, fontWeight: 500 }}>Amorun</Text>
                                <Text style={{ color: '#BCBCBC', fontSize: 16, fontWeight: 500 }}>Delivery Charge</Text>
                                <Text style={{ color: '#BCBCBC', fontSize: 16, fontWeight: 500 }}>Tax</Text>
                                <Text style={{ color: '#BCBCBC', fontSize: 16, fontWeight: 500 }}>Discount</Text>
                            </View>
                            <View style={{ flexDirection: 'column', rowGap: 4 }}>
                                <Text style={{ color: '#454545', fontSize: 16, textAlign: 'right', fontWeight: 500 }}>$120.00</Text>
                                <Text style={{ color: '#454545', fontSize: 16, textAlign: 'right', fontWeight: 500 }}>$05.00</Text>
                                <Text style={{ color: '#454545', fontSize: 16, textAlign: 'right', fontWeight: 500 }}>$00.00</Text>
                                <Text style={{ color: '#868686', fontSize: 16, textAlign: 'right', fontWeight: 500 }}>$-35.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default MyCart;