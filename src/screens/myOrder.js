import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import COLORS from "../components/color";

const MyOrder = ({ navigation }) => {
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={onCancel} >
                <View>
                    <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'column', rowGap: 25 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 50, height: 50, borderRadius: 50, borderColor: '#AEAEAE', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require("../assets/arrow-left.png")} />
                            </View>
                            <Text style={{ color: '#ADADAD', marginLeft: 85, fontSize: 23, color: '#000' }}>Checkout</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                                <Text style={{ color: '#000', fontSize: 19, fontWeight: 500 }}>Active</Text>
                                <Text style={{ color: '#000', fontSize: 19, fontWeight: 500 }}>Complated</Text>
                                <Text style={{ color: '#000', fontSize: 19, fontWeight: 500 }}>Cancelled</Text>
                            </View>
                            <View style={{ height: 3.5, width: 100, backgroundColor: COLORS.primary, marginLeft: -7, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}></View>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={{paddingBottom:150}}>
                        <View style={{backgroundColor: '#f1f1f1', flexDirection: 'column', rowGap: 25, paddingTop: 20 }}>
                            <View style={{ marginHorizontal: 35, backgroundColor: '#fff', padding: 15, flexDirection: 'column', rowGap: 15, borderRadius: 15 }}>
                                <View style={{ borderRadius: 15, backgroundColor: '#FFFCBB', justifyContent: 'center', paddingHorizontal: 8, paddingVertical: 5, flexDirection: 'column', alignSelf: 'flex-start' }}>
                                    <Text style={{ color: '#E3BA51', fontWeight: 500 }}>order place</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Transation ID</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>#GR45HGJF</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Order Date</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>10,Sep</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Total Payment</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>$25.00</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: 1, backgroundColor: COLORS.line }}></View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ borderRadius: 15, borderColor: COLORS.primary, borderWidth: 1.5, paddingHorizontal: 45, paddingVertical: 11, alignSelf: 'flex-start' }}>
                                        <Text style={{ color: COLORS.primary, fontWeight: 600, fontSize: 17 }}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ borderRadius: 15, backgroundColor: COLORS.primary, paddingHorizontal: 25, paddingVertical: 11, alignSelf: 'flex-start' }}>
                                        <Text style={{ color: '#fff', fontWeight: 600, fontSize: 17 }}>Track Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ marginHorizontal: 35, backgroundColor: '#fff', padding: 15, flexDirection: 'column', rowGap: 15, borderRadius: 15 }}>
                                <View style={{ borderRadius: 15, backgroundColor: '#C9FCFF', justifyContent: 'center', paddingHorizontal: 8, paddingVertical: 5, flexDirection: 'column', alignSelf: 'flex-start' }}>
                                    <Text style={{ color: '#6774AA', fontWeight: 500 }}>In Progress</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Transation ID</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>#TRE5HGJF</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Order Date</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>11,Sep</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Total Payment</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>$50.00</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: 1, backgroundColor: COLORS.line }}></View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ borderRadius: 15, borderColor: COLORS.primary, borderWidth: 1.5, paddingHorizontal: 45, paddingVertical: 11, alignSelf: 'flex-start' }}>
                                        <Text style={{ color: COLORS.primary, fontWeight: 600, fontSize: 17 }}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ borderRadius: 15, backgroundColor: COLORS.primary, paddingHorizontal: 25, paddingVertical: 11, alignSelf: 'flex-start' }}>
                                        <Text style={{ color: '#fff', fontWeight: 600, fontSize: 17 }}>Track Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ marginHorizontal: 35, backgroundColor: '#fff', padding: 15, flexDirection: 'column', rowGap: 15, borderRadius: 15 }}>
                                <View style={{ borderRadius: 15, backgroundColor: '#C9FCFF', justifyContent: 'center', paddingHorizontal: 8, paddingVertical: 5, flexDirection: 'column', alignSelf: 'flex-start' }}>
                                    <Text style={{ color: '#6774AA', fontWeight: 500 }}>In Progress</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Transation ID</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>#R443HGJF</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Order Date</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>11,Sep</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', rowGap: 12 }}>
                                            <Text style={{ color: '#868686', fontSize: 16, fontWeight: 500 }}>Total Payment</Text>
                                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>$57.60</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: 1, backgroundColor: COLORS.line }}></View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ borderRadius: 15, borderColor: COLORS.primary, borderWidth: 1.5, paddingHorizontal: 45, paddingVertical: 11, alignSelf: 'flex-start' }}>
                                        <Text style={{ color: COLORS.primary, fontWeight: 600, fontSize: 17 }}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ borderRadius: 15, backgroundColor: COLORS.primary, paddingHorizontal: 25, paddingVertical: 11, alignSelf: 'flex-start' }}>
                                        <Text style={{ color: '#fff', fontWeight: 600, fontSize: 17 }}>Track Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView >
    )
}

export default MyOrder;