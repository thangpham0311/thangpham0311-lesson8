import React from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const CustomFlatlist: React.FC<{ data1: any }> = ({ data1 }) => {
    type Product = {
        id: string,
        name: string,
        url: string
    }
    const Item = ({ item }: { item: Product }) => (
        <View style={{ marginRight: 10 }}>

            <Image style={{ height: 70, width: 110, borderRadius: 5 }} source={{
                uri: item.url
            }} />
            <Text style={{ textAlign: 'center' }}> {item.name}</Text>

        </View>
    )
    const renderItem = ({ item }: { item: Product }) => (
        <Item item={item} />
    )

    return (
        <SafeAreaView>
            <FlatList
                data={data1}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>




    );
}
export default CustomFlatlist;