import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListScreen = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();
    let store = useSelector(state => state);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then(response => response.json())
            .then(json => setData(json.movies))
            .catch(error => alert(error))
            .finally(() => setLoading(false))
        console.log("useeffect working!");
    }, [])

    const ListItem = ({ item }) => {
        return (
            <View>
                <View style={styles.listWrapper}>
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={require('../assets/background.png')}
                    />

                    <View>
                        <Text style={styles.itemTitle}>Villa Bosphorus</Text>
                        <Text style={styles.itemDescription}>Lorem İpsum Sit Dolor Met</Text>
                        <View style={styles.iconContainer}>
                            <Image
                                resizeMode="contain"
                                style={[styles.icon, { marginTop: 10 }]}
                                source={require('../assets/star.png')}
                            />
                            <Text>3.9</Text>
                            <Image
                                resizeMode="contain"
                                style={styles.icon}
                                source={require('../assets/location.png')}
                            />
                            <Text>3.7 km</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.addToChart}
                    onPress={() => dispatch({ type: "addToChart" })}
                >
                    <Image
                        resizeMode="contain"
                        style={styles.icon}
                        source={require('../assets/add_to_chart.png')}
                    />
                    <Text style={styles.addToChartTitle}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>

        );
    };
    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> :
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={ListItem}
                    />
                </View>
            }
            <View style={styles.cartContainer}>
                <Text style={styles.cartTitle}>Ürünlerin Toplamı</Text>
                <Text style={styles.totalTitle}>Toplam : {store.price} TL</Text>
                <Text>Vergiler + Kargo: {store.price > 0 ? store.taxAndShipping : 0} TL</Text>
                <Text style={styles.averageTotal}>Genel Toplam : {store.price > 0 ? store.price + store.taxAndShipping : 0} TL </Text>
            </View>
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    listContainer: {
        flex: 3,
        borderBottomWidth: 1,
        borderColor: '#F1F3F5'
    },
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: windowHeight / 8,
        borderRadius: 5,
        resizeMode: 'contain',
        margin: 10,
        marginHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'flex-end',
        //borderWidth:1
    },
    itemTitle: {
        fontWeight: '600',
        fontSize: 16,
        color: '#121212'
    },
    itemDescription: {
        fontWeight: '400',
        color: '#64738C',
        fontSize: 12,
        marginVertical: 5
    },
    addToChart: {
        flexDirection: 'row',
        width: windowWidth * 9 / 10,
        justifyContent: 'center',

    },
    addToChartTitle: {
        color: '#E82223',
        fontWeight: '700',
        marginHorizontal: 10
    },
    cartContainer: {
        marginLeft: 10,
        flex: 1,
        padding: 10
    },
    cartTitle: {
        fontWeight: '700',
        fontSize: 24,
        color: '#000000'
    },
    totalTitle: {
        marginVertical: 10
    },
    averageTotal: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        marginVertical: 10
    },
    icon: {
        width: 20,
        height: 20
    },
})
