import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

// Giả định ảnh và các tùy chọn màu
const productInfo = {
  name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
  // Các màu và ảnh tương ứng
  colors: [
    { code: 'light_blue', color: '#C5FBEB', image: require('./assets/vs_blue.png') },
    { code: 'red', color: '#F30D0D', image: require('./assets/vs_red.png') },
    { code: 'black', color: '#000000', image: require('./assets/vs_black.png') },
    { code: 'dark_blue', color: '#234896', image: require('./assets/vs_silver.png') },
  ],
  defaultImage: require('./assets/vs_blue.png'), / // Ảnh mặc định ban đầu (từ Screen 1)
};

function Screen2() {
  const navigation = useNavigation();
  // Khởi tạo trạng thái với ảnh mặc định của Screen 1
  const [selectedColorCode, setSelectedColorCode] = useState('dark_blue'); 

  // Tìm ảnh sản phẩm tương ứng với màu đã chọn
  const selectedProduct = productInfo.colors.find(c => c.code === selectedColorCode);
  const displayImage = selectedProduct ? selectedProduct.image : productInfo.defaultImage;

  // Hàm xử lý khi chọn một ô màu
  const handleColorSelect = (colorCode) => {
    setSelectedColorCode(colorCode);
  };

  // Hàm xử lý khi nhấn nút XONG
  const handleDone = () => {
    // 1. Truyền dữ liệu về Screen 1: Gửi tên route và tham số (màu đã chọn)
    navigation.navigate('Screen1', { selectedColor: selectedColorCode });
  };

  return (
    <View style={styles.container}>
      
      {/* 1. Khu vực Thông tin sản phẩm thu gọn */}
      <View style={styles.productHeader}>
        <Image 
          source={displayImage} // Ảnh thay đổi theo màu được chọn
          style={styles.productImage} 
          resizeMode="contain"
        />
        <Text style={styles.productName}>{productInfo.name}</Text>
      </View>

      {/* Đường phân cách */}
      <View style={styles.separator} />

      {/* 2. Khu vực Chọn Màu */}
      <View style={styles.colorSelectionArea}>
        <Text style={styles.promptText}>Chọn một màu bên dưới:</Text>
        
        {/* Vòng lặp hiển thị các ô màu */}
        {productInfo.colors.map((item) => (
          <TouchableOpacity
            key={item.code}
            style={[
              styles.colorOption,
              { backgroundColor: item.color },
              selectedColorCode === item.code && styles.selectedBorder, // Thêm viền khi chọn
            ]}
            onPress={() => handleColorSelect(item.code)}
          />
        ))}
      </View>

      {/* 3. Nút XONG */}
      <TouchableOpacity 
        style={styles.doneButton}
        onPress={handleDone}
      >
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Screen2;

// --- STYLES ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4', // Màu nền theo mẫu
    padding: 18,
  },
  
  // 1. Header
  productHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 5
  },
  productImage: {
    width: 112,
    height: 112,
    marginRight: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'normal',
    width: '60%',
    paddingTop: 10
  },
  
  // Đường phân cách
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },

  // 2. Chọn Màu
  colorSelectionArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 10,
  },
  promptText: {
    fontSize: 18,
    textAlign: 'left',
    width: '90%',
    marginBottom: 20,
  },
  colorOption: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#999',
  },
  selectedBorder: {
    borderWidth: 4,
    borderColor: 'blue', // Màu viền nổi bật khi chọn
  },

  // 3. Nút XONG
  doneButton: {
    backgroundColor: '#4A69A1', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});