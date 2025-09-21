import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const Product = ({ img, title, shopName }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        borderBottomWidth: 1,
        borderBlockColor: 'gray',
      }}>
      <View>
        <Image style={{ width: 100, height: 90 }} source={img} />
      </View>
      <View style={{ paddingLeft: 20, paddingTop: 20 }}>
        <Text>{title}</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '80%',
            marginTop: 10,
          }}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text>Shop </Text>
              <Text style={{ color: '#FF0E0E' }}>{shopName}</Text>
            </View>
          </View>
          <View>
            <Pressable style={styles.button}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  Chat
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F31111',
    height: 30,
    width: 50,
  },
});