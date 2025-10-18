import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const Product2 = ({ img, title, star, price }) => {
  const starRating = (item) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (item >= i) {
        stars.push('⭐');
      } else {
        stars.push('✩');
      }
    }

    return stars.join(' ');
  };

  return (
    <View
      style={{
        width: '50%',
        padding: 20,
      }}>
      <Image style={{ width: '100%', resizeMode: 'contain' }} source={img} />
      <Text style={{ fontSize: 25 }}>{title}</Text>
      <Text style={{ fontSize: 15 }}>{starRating(star)} ( 15 )</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingRight: 20 }}>
          {price}
        </Text>
        <Text style={{ color: 'gray', fontSize: 20 }}>-39%</Text>
      </View>
    </View>
  );
};

export default Product2;