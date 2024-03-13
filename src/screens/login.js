import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import COLORS from '../components/color';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    const handleLogin = () => {
        const validEmail = 'example@gmail.com';
        const validPassword = 'password';

        if (email === validEmail && password === validPassword) {
            navigation.navigate('Home');
        } else {
            alert('Yanlış Bilgiler');
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={onCancel} style={{ flex: 1 }} >
                <View style={{ flex: 1, marginHorizontal: 40, justifyContent: 'center' }}>
                    <View style={{ style: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 35, fontWeight: 800, color: '#000000' }}>Sing In</Text>
                        <Text style={{ fontSize: 15, marginTop: 15, color: '#B6B6B6' }}>Hi! Welcome back, you’ve been missed</Text>
                    </View>

                    <View style={{ rowGap: 70 }}>
                        <View style={{ marginTop: 40, rowGap: 6 }}>
                            <Text style={{ fontSize: 14, fontWeight: 500 }}>Email</Text>
                            <TextInput
                                placeholder='example@gmail.com'
                                placeholderTextColor='#B6B6B6'
                                onFocus={() => setFocus(true)}
                                keyboardType='email-address'
                                value={email}
                                onChangeText={setEmail}
                                style={{
                                    height: 44,
                                    paddingLeft: 30,
                                    borderWidth: 1,
                                    borderRadius: 15,
                                    borderColor: COLORS.inputBorder,
                                }}
                            ></TextInput>
                            <Text style={{ fontSize: 14, fontWeight: 500 }}>Password</Text>

                            <View style={{ height: 44, paddingHorizontal: 20, borderWidth: 1, borderRadius: 15, borderColor: '#DCDCDC', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TextInput
                                    onFocus={() => setFocus(true)}
                                    placeholder='**********************'
                                    placeholderTextColor='#B6B6B6'
                                    secureTextEntry={!isPasswordShown}
                                    value={password}
                                    onChangeText={setPassword}
                                    style={{ flex: 1 }}
                                ></TextInput>
                                <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>

                                    {isPasswordShown == true ? (
                                        <Image source={require("../assets/eyes.png")} style={{ height: 30, width: 30 }} />) :
                                        (<Image source={require("../assets/eyes-off.png")} style={{ height: 30, width: 30 }} />)
                                    }

                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={{ alignSelf: 'flex-start', }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.primary, textDecorationLine: 'underline' }}>Forget Password?</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={handleLogin} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: COLORS.primary, height: 44 }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 25, marginHorizontal: 20, rowGap: 25 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ backgroundColor: COLORS.line, height: 1, width: '30%' }}></View>
                            <Text style={{ fontSize: 11, color: '#000', fontWeight: '500' }}>Or sign in with</Text>
                            <View style={{ backgroundColor: COLORS.line, height: 1, width: '30%' }}></View>
                        </View>

                        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderColor: COLORS.inputBorder, borderWidth: 1, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require("../assets/apple.png")} style={{ height: 26, width: 26 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: COLORS.inputBorder, borderWidth: 1, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginHorizontal: 12 }}>
                                <Image source={require("../assets/google.png")} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: COLORS.inputBorder, borderWidth: 1, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require("../assets/facebook.png")} style={{ height: 30, width: 30 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 11, fontWeight: 500, color: '#000' }}>Don't have an account?</Text>
                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 11, textDecorationLine: 'underline', color: COLORS.primary, fontWeight: 'bold' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Login;
