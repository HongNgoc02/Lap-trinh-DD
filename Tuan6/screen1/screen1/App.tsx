import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity } from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
// or any files within the Snack

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <ScrollView style={{flex: 1,backgroundColor: '#fff',padding: 15,}}>
      {/* 1. Khu vực Ảnh sản phẩm */}
      <View style={{alignItems: 'center',marginBottom: 20,}}>
        <Image 
          source={require('./assets/vs_blue.png')} 
          style={{width: '100%',height: 360}} 
          resizeMode="contain" 
        />
      </View>

      {/* 2. Khu vực Thông tin cơ bản */}
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 15,marginBottom: 10,}}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={{flexDirection: 'row',alignItems: 'center',marginBottom: 10,}}>
          {/* Đánh giá (5 sao) */}
          <Text style={{color: '#E0A800', // Màu vàng cho sao
                        fontSize: 18,
                        marginRight: 10,}}>★★★★★</Text>
          <Text style={{fontSize: 15,color: '#000',}}>(301 đánh giá)</Text>
        </View>

        {/* Giá */}
        <View style={{flexDirection: 'row',alignItems: 'center',marginBottom: 10}}>
          <Text style={{fontSize: 18,fontWeight: 'bold',color: '#000',marginRight: 30,}}>1.790.000 đ</Text>
          <Text style={{fontSize: 15,color: '#999',textDecorationLine: 'line-through',}}>1.790.000 đ</Text>
        </View>

        {/* Cam kết */}
        <View style={{flexDirection: 'row',alignItems: 'center',marginBottom: 20,}}>
            <Text style={{color: '#C00000',fontSize: 15,fontWeight: 'bold',marginRight: 5,}}>
                Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            <Text style={{width: 20,height: 20,borderRadius: 10,borderWidth: 1,borderColor: '#000',
            textAlign: 'center',lineHeight: 18,fontSize: 12,}}>?</Text>
        </View>
      </View>
      
      {/* 3. Nút Chọn Màu và Chuyển Hướng */}
      <TouchableOpacity 
         style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',borderWidth: 1,
         borderColor: '#999',borderRadius: 5,padding: 15,marginBottom: 20,}}
         //onPress={handleSelectColor} // Gọi hàm chuyển màn hình
       >
         <Text style={{fontSize: 15,fontWeight: 'bold',}}>4 MÀU - CHỌN MÀU</Text>
         <Text style={{fontSize: 20,fontWeight: 'bold',color: '#000',}}>&gt;</Text>
       </TouchableOpacity>

      {/* 4. Nút Chọn Mua */}
      <TouchableOpacity style={{backgroundColor: 'red',padding: 15,borderRadius: 10,alignItems: 'center',}}>
        <Text style={{color: '#fff',fontSize: 20,fontWeight: 'bold',}}>CHỌN MUA</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
