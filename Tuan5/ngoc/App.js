import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product from './components/Product';
import Product2 from './components/Product2';
import SearchHeader from './components/SearchHeader';
import HeaderChat from './components/HeaderChat';
import Bai34 from './components/Bai34'
import Bai5 from "./components/Bai5"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/**    <HeaderChat/>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product img={item.img} title={item.title} shopName={item.shopName} />
        )}
      />**/}
      {/**<SearchHeader/>
      <ScrollView>
        <FlatList numColumns={2} data={DATA} keyExtractor={item => item.id} renderItem={({item}) => <Product2 img={item.img} title={item.title} price={item.price} star={item.star}  /> } />
      </ScrollView>**/}

      {/**<Bai34/>**/}
      <Bai5/>
    </SafeAreaView>
  );
}

const products = [
  {
    id: 1,
    img: require('./assets/1d15351489d1f4c98a08c53fb568891607347040.jpg'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Devang',
  },
  {
    id: 2,
    img: require('./assets/2b9dea9b4d819d9ee3f8aa713e6c7da6f9a8cbab.jpg'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'LTD Food',
  },
  {
    id: 3,
    img: require('./assets/43afdbc71b8ba3fabe412c960fafda92f944bc99.jpg'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Thế giới đồ chơi',
  },
  {
    id: 4,
    img: require('./assets/85568487dc854fa829d1b54315dd99bec7b2d68b.png'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Minh Long Book',
  },
  {
    id: 5,
    img: require('./assets/9949f5a2338eb97e0752d7d1bd66b35ca4e36b72.jpg'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Devang',
  },
  {
    id: 6,
    img: require('./assets/c8c98ce6979c72e4afba69217c666d47e7f3dafe.png'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Devang',
  },
  {
    id: 7,
    img: require('./assets/1d15351489d1f4c98a08c53fb568891607347040.jpg'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Devang',
  },
];

const DATA = [
  {
    id: 1,
    img: require('./assets/dauchuyendoi 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    star: 4,
    price: '69.900đ',
  },
  {
    id: 2,
    img: require('./assets/dauchuyendoi 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    star: 5,
    price: '30.000đ',
  },
  {
    id: 3,
    img: require('./assets/dauchuyendoi 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    star: 3,
    price: '40.000đ',
  },
  {
    id: 4,
    img: require('./assets/dauchuyendoi 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    star: 2,
    price: '30.000đ',
  },
  {
    id: 5,
    img: require('./assets/daynguon 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    star: 4,
    price: '10.000đ',
  },
  {
    id: 6,
    img: require('./assets/giacchuyen 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    star: 2,
    price: '12.000đ',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});