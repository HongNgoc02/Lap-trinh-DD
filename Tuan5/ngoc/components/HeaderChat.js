import { View, Image, Text, StyleSheet } from 'react-native';

const HeaderChat = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          padding: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <Image
          source={require('../assets/ant-design_arrow-left-outlined.png')}
        />
        <Text style={{ color: 'white', fontSize: 20 }}>Chat</Text>
        <Image source={require('../assets/bi_cart-check.png')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#1BA9FF',
  },
});
export default HeaderChat;