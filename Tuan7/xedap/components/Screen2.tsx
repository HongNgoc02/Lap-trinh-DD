import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App'; 
import { FontAwesome } from '@expo/vector-icons'; // Dùng icon trái tim

// ----------------------------------------------------
// 1. ĐỊNH NGHĨA TYPESCRIPT CHO COMPONENT VÀ DỮ LIỆU
// ----------------------------------------------------

// Kiểu dữ liệu cho một sản phẩm
type Product = {
  id: string;
  name: string;
  price: number;
  image: number; // type for require() results
  type: 'Roadbike' | 'Mountain';
};

// Kiểu Props cho Screen2 (đảm bảo nó nhận đối tượng navigation)
type Screen2Props = NativeStackScreenProps<RootStackParamList, 'Screen2'>;

// ----------------------------------------------------
// 2. DỮ LIỆU SẢN PHẨM (ĐÃ ĐƯỢC ĐỊNH KIỂU)
// ----------------------------------------------------
const products: Product[] = [
  // Đảm bảo đường dẫn hình ảnh là chính xác
  { id: '1', name: 'Pinarello', price: 1800, image: require('../assets/bione-removebg-preview.png'), type: 'Roadbike' },
  { id: '2', name: 'Pina Mountai', price: 1700, image: require('../assets/bithree_removebg-preview.png'), type: 'Mountain' },
  { id: '3', name: 'Pina Bike', price: 1500, image: require('../assets/bitwo-removebg-preview.png'), type: 'Roadbike' },
  { id: '4', name: 'Pinarello', price: 1900, image: require('../assets/bithree_removebg-preview.png'), type: 'Mountain' },
  { id: '5', name: 'Pinarello', price: 2700, image: require('../assets/bitwo-removebg-preview.png'), type: 'Roadbike' },
  { id: '6', name: 'Pinarello', price: 1350, image: require('../assets/bione-removebg-preview.png'), type: 'Mountain' },
];

// ----------------------------------------------------
// 3. COMPONENT SCREEN2 (SỬ DỤNG PROPS THAY VÌ useNavigation)
// ----------------------------------------------------
export default function Screen2({ navigation }: Screen2Props) {
  // Định kiểu cho state
  const [dataList, setDataList] = useState<Product[]>(products);
  const [selected, setSelected] = useState<'All' | 'Roadbike' | 'Mountain'>('All'); // Chỉ dùng 3 loại này

  const getData = (nameSearch: 'All' | 'Roadbike' | 'Mountain') => {
    setSelected(nameSearch);

    if (nameSearch === 'All') {
      setDataList(products);
    } else {
      // 💡 Sửa logic lọc: Lọc theo thuộc tính `type` thay vì `name`
      const filtered = products.filter((item) => item.type === nameSearch);
      setDataList(filtered);
    }
  };
  
  // Hàm điều hướng tới Screen3
  const handleNavigateToDetail = (item: Product) => {
    // 💡 Điều hướng tới 'Screen3' và truyền bikeId (chỉ cần ID)
    navigation.navigate('Screen3', { bikeId: item.id });
  };

  const renderButton = (label: 'All' | 'Roadbike' | 'Mountain') => (
    <TouchableOpacity
      style={[styles.filterButton, selected === label && styles.filterButtonActive]}
      onPress={() => getData(label)}>
      <Text style={[styles.filterText, selected === label ? styles.filterTextActive : styles.filterTextNormal]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleNavigateToDetail(item)}
    >
      <TouchableOpacity style={styles.iconHeart}>
        <FontAwesome name="heart-o" size={18} color="black" />
      </TouchableOpacity>
      
      <View style={styles.imgContainer}>
        <Image source={item.image} style={styles.imgCard} />
      </View>
      
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 💡 Loại bỏ title "The world's Best Bike" vì nó đã được đặt trong header của App.tsx */}

      <View style={styles.listButton}>
        {renderButton('All')}
        {renderButton('Roadbike')}
        {renderButton('Mountain')}
      </View>

      <FlatList
        data={dataList}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={renderProductItem}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// ----------------------------------------------------
// 4. CHỈNH SỬA STYLES (THEO GIAO DIỆN)
// ----------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15, // Thay đổi padding để sát với giao diện
    paddingTop: 10,
  },
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  filterButton: {
    // Thay đổi style button
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    width: '31%', // Đảm bảo 3 nút vừa vặn
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#E94141',
  },
  filterText: {
    fontWeight: '500',
    color: '#333',
    fontSize: 16,
  },
  filterTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  filterTextNormal: {
      color: '#333',
  },
  row: { 
      justifyContent: 'space-between', 
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    // Style cho từng sản phẩm
    flex: 1,
    margin: 5,
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#EBEBEB', 
    borderRadius: 20,
    alignItems: 'center',
    maxWidth: '48%', 
  },
  iconHeart: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
  },
  imgContainer: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCard: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#E94141',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});