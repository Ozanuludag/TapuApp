import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import Button from '../components/Button'
import Header from '../components/Header'
import Input from '../components/Input'
import { useDispatch, useSelector } from 'react-redux'

const AccountScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [country, setCountry] = useState();
    const dispatch = useDispatch();

    let store = useSelector(state => state);

    const handleLogin = () => {
        dispatch({
            type: "Login",
            payload: { email: email, password: password, country: country }
        })
    }
    const handleLogout = () => {
        setPassword(""),
            setEmail(""),
            setCountry(""),
            dispatch({ type: "Logout" })
    }

    if (store.isLoggedIn) {
        return (

            <View style={styles.container}>
                <Header title="ACCOUNT" />
                <Text style={styles.headerName}>Your Name</Text>
                <Text style={styles.infoText}>E-mail: {store.email}</Text>
                <Text style={styles.infoText}>Password: {store.password} </Text>
                <Text style={styles.infoText}>Current-locale: {store.country}</Text>
                <RNPickerSelect
                    onValueChange={(value) => setCountry(value)}
                    items={[
                        { label: 'Turkey', value: 'TR' },
                        { label: 'Germany', value: 'DE' },
                        { label: 'England', value: 'EN' },
                    ]}
                />
                <Button title="Log Out" onPress={handleLogout} />
            </View>

        )
    } else {
        return (
            <View style={styles.container}>
                <Header title="ACCOUNT" />
                <Input
                    placeholder="email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                />
                <RNPickerSelect
                    onValueChange={(value) => setCountry(value)}
                    items={[
                        { label: 'Turkey', value: 'TR' },
                        { label: 'Germany', value: 'DE' },
                        { label: 'England', value: 'EN' },
                    ]}
                />
                <Button title="Sign Up" onPress={handleLogin} />
            </View>
        )
    }

}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerName: {
        fontSize: 36,
        fontWeight: '700',
        color: '#000000',
        margin: 20
    },
    infoText: {
        color: '#000000',
        marginHorizontal: 20,
        marginVertical: 5
    }
})
