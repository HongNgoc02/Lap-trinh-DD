

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

// Kiểu Props cho Screen3
type Screen3Props = NativeStackScreenProps<RootStackParamList, 'Screen3'>;

// Dữ liệu giả định chi tiết sản phẩm
const getBikeDetails = (id: string) => {
    return {
        id: id,
        name: 'Pina Mountain',
        originalPrice: 1350,
        discountedPrice: 449, 
        image: require('../assets/bifour_-removebg-preview.png'),
        description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    };
};

export default function Screen3({ route }: Screen3Props) {
  const { bikeId } = route.params; 
  const bike = getBikeDetails(bikeId);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        
        {/* =================================================== */}
        {/* KHU VỰC HÌNH ẢNH (ImageWrapper) */}
        {/* =================================================== */}
        <View style={styles.imageWrapper}>
            {/* Vòng tròn ảnh Profile giả */}
            <View style={styles.profileCircle}>
                <Text style={styles.profileText}>T</Text>
            </View>
            {/* Ảnh xe */}
            <Image source={bike.image} style={styles.mainImage} />
        </View>
        
        {/* =================================================== */}
        {/* KHU VỰC THÔNG TIN (ContentWrapper) */}
        {/* =================================================== */}
        <View style={styles.contentWrapper}>
            <Text style={styles.name}>{bike.name}</Text>

            {/* Giá & Discount */}
            <View style={styles.priceContainer}>
                {/* Giá cũ bị gạch ngang và % giảm */}
                <Text style={styles.discount}>15% OFF ${bike.originalPrice}</Text>
                {/* Giá mới */}
                <Text style={styles.price}>${bike.discountedPrice}</Text>
            </View>
            
            {/* Mô tả */}
            <View style={styles.descriptionSection}>
                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.description}>{bike.description}</Text>
            </View>

            {/* Footer: Thêm vào giỏ hàng và Favorite */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.favoriteButton}>
                    <FontAwesome5 name="heart" size={24} color="#E94141" solid /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add to card</Text>
                </TouchableOpacity>
            </View>
        </View>
        
      </View>
    </View>
  );
}

// ----------------------------------------------------
// CẬP NHẬT STYLING
// ----------------------------------------------------

const styles = StyleSheet.create({
  container: { 
      flex: 1, 
      backgroundColor: '#fff', 
      padding: 20, 
  },
  mainContent: {
      flex: 1,
      backgroundColor: '#f9f7f6', 
      borderRadius: 20,
      padding: 15,
  },
  // Khu vực hình ảnh được tách ra
  imageWrapper: {
      height: 250, // Giảm chiều cao để có không gian cho thông tin
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FCECEC', 
      borderRadius: 20,
      marginBottom: 10,
      position: 'relative',
      overflow: 'hidden', // Quan trọng: Đảm bảo không có gì tràn ra
  },
  profileCircle: {
      position: 'absolute',
      top: 20,
      left: 20,
      width: 45,
      height: 45,
      borderRadius: 22.5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      borderWidth: 2,
      borderColor: 'white',
  },
  profileText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#E94141',
  },
  mainImage: { 
      width: '100%', 
      height: '100%', 
      resizeMode: 'contain',
  },
  // Wrapper mới cho nội dung
  contentWrapper: {
      flex: 1,
      paddingHorizontal: 5, // Thêm padding nhẹ cho nội dung
  },
  name: { 
      fontSize: 28, 
      fontWeight: 'bold', 
      color: '#333',
  },
  priceContainer: { 
      // Sửa lại cách hiển thị giá và discount
      flexDirection: 'row', 
      alignItems: 'flex-end', 
      marginVertical: 10,
  },
  discount: { 
      textDecorationLine: 'line-through', 
      color: 'gray', 
      marginRight: 10,
      fontSize: 16,
      fontWeight: '600',
  },
  price: { 
      fontSize: 32, 
      fontWeight: 'bold', 
      color: '#E94141', 
  },
  descriptionSection: {
      // Cho phép mô tả cuộn hoặc chiếm không gian nếu cần
      marginTop: 10,
  },
  sectionTitle: { 
      fontSize: 18, 
      fontWeight: 'bold', 
      marginVertical: 10, 
  },
  description: { 
      color: '#555',
      lineHeight: 20,
      fontSize: 15,
  },
  footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto', // Đẩy footer xuống dưới cùng
      paddingTop: 15,
  },
  favoriteButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#E94141',
      justifyContent: 'center',
      alignItems: 'center',
  },
  addButton: {
      flex: 1,
      marginLeft: 15,
      backgroundColor: '#E94141',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
  },
  addButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
  }
});