import { View, Image, Text, StyleSheet, TextInput } from 'react-native';

const SearchHeader = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          padding: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
        }}>
        <Image
          source={require('../assets/ant-design_arrow-left-outlined.png')}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../assets/whh_magnifier.png')} />
          </View>
          <TextInput style={styles.input} placeholder="Dây cáp USB" />
        </View>
        <Image source={require('../assets/bi_cart-check.png')} />
        <Image source={require('../assets/Group 2.png')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#1BA9FF',
  },
  input: {
    height: 50,
    width: 150,
    backgroundColor: 'white',
  },
});
export default SearchHeader;