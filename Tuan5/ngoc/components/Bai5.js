import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from 'react-native';

const Bai5 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://68cf8063ec1a5ff33824b8c0.mockapi.io/album')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Đang tải ảnh...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Pressable
        onPress={() => setIsGrid(!isGrid)}
        style={{
          height: 50,
          backgroundColor: 'lightblue',
          borderRadius: 10,
          flex: 1,
          justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize : 20
          }}>
          {isGrid ? "Đổi sang GridView" : "Đổi sang ListView"}
        </Text>
      </Pressable>
      <FlatList
        numColumns={isGrid ? 1 : 2}
        key={isGrid ? "l" : "g"}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ width: '50%' }}>
              <Image
                source={{ uri: item.img }}
                style={{
                  width: '100%',
                  height: 200,
                  marginVertical: 10,
                  borderRadius: 8,
                }}
              />
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default Bai5;