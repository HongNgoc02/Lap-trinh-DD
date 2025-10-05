import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const Bai34 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://68cf8063ec1a5ff33824b8c0.mockapi.io/users')
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
        <Text>Đang tải dữ liệu</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <FlatList
      horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{borderWidth : 1, padding : 10, marginRight : 5, borderRadius : 10}}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default Bai34;