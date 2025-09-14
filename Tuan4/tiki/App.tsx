import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';

// Dữ liệu giả cho danh sách sản phẩm tương tự
const SIMILAR_PRODUCTS = [
  { id: '1', name: 'Sách giáo khoa Toán 12', price: '95.000 đ', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Sách giáo khoa Lý 12', price: '88.000 đ', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Sách giáo khoa Hóa 12', price: '92.500 đ', image: 'https://via.placeholder.com/100' },
  { id: '4', name: 'Bộ đề thi thử đại học', price: '120.000 đ', image: 'https://via.placeholder.com/100' },
];

const TikiProductScreen = () => {
  const [quantity, setQuantity] = useState(1);

  // Hàm để tăng số lượng sản phẩm
  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Hàm để giảm số lượng sản phẩm, không cho phép nhỏ hơn 1
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const originalPrice = 141800; // Giá gốc của sản phẩm
  const totalPrice = originalPrice * quantity; // Tính tổng tiền dựa trên số lượng

  const renderSimilarProduct = ({ item }) => (
    <View style={styles.similarProductItem}>
      <Image source={{ uri: item.image }} style={styles.similarProductImage} />
      <Text style={styles.similarProductName}>{item.name}</Text>
      <Text style={styles.similarProductPrice}>{item.price}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Product Card */}
      <View style={styles.productCard}>
        <Image
          source={require('./assets/book.png')} 
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.supplierText}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.priceText}>{totalPrice.toLocaleString('vi-VN')} đ</Text>
          <View style={styles.originalPriceContainer}>
            <Text style={styles.originalPriceText}>141.000 đ</Text>
          </View>
          <View style={styles.quantityContainer}>
            <View style={styles.quantityControl}>
              <TouchableOpacity style={styles.quantityButton} onPress={handleDecreaseQuantity}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={handleIncreaseQuantity}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.buyLaterText}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Promotion Section */}
      <View style={styles.promoSection}>
        <View style={styles.promoRow}>
          <Text style={styles.promoLabel}>Mã giảm giá đã lưu</Text>
          <TouchableOpacity>
            <Text style={styles.promoLink}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.discountRow}>
          <TouchableOpacity style={styles.discountButton}>
            <Text style={styles.discountText}>Mã giảm giá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Gift Voucher Section */}
      <View style={styles.giftVoucherSection}>
        <Text style={styles.giftVoucherText}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          <Text style={styles.giftVoucherLink}> Nhập tại đây?</Text>
        </Text>
      </View>

      {/* Price Detail Section */}
      <View style={styles.priceDetailSection}>
        <Text style={styles.detailLabel}>Tạm tính</Text>
        <Text style={styles.detailPriceText}>{totalPrice.toLocaleString('vi-VN')} đ</Text>
      </View>

      {/* Total Price Section */}
      <View style={styles.totalSection}>
        <Text style={styles.detailLabel}>Thành tiền</Text>
        <Text style={styles.detailPriceText}>{totalPrice.toLocaleString('vi-VN')} đ</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>

      {/* Similar Products Section using FlatList */}
      <View style={styles.similarProductsSection}>
        <Text style={styles.similarProductsTitle}>Sản phẩm tương tự</Text>
        <FlatList
          data={SIMILAR_PRODUCTS}
          renderItem={renderSimilarProduct}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  supplierText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F44336', // Red color for price
  },
  originalPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  originalPriceText: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#666',
  },
  quantityText: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buyLaterText: {
    color: '#1E90FF',
    fontSize: 16,
  },
  promoSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  promoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  promoLabel: {
    fontSize: 14,
    color: '#666',
  },
  promoLink: {
    color: '#1E90FF',
    fontSize: 14,
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discountButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#FFEB3B',
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  discountText: {
    color: '#000',
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  giftVoucherSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  giftVoucherText: {
    fontSize: 14,
    color: '#666',
  },
  giftVoucherLink: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  priceDetailSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 1,
  },
  detailLabel: {
    fontSize: 16,
    color: '#000',
  },
  detailPriceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F44336',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#F44336',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  similarProductsSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
  },
  similarProductsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  similarProductItem: {
    width: 120, // Kích thước cố định cho mỗi sản phẩm
    marginRight: 15,
    alignItems: 'center',
  },
  similarProductImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  similarProductName: {
    fontSize: 12,
    textAlign: 'center',
  },
  similarProductPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F44336',
    marginTop: 5,
  },
});

export default TikiProductScreen;