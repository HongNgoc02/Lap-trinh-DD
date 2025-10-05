import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute  } from '@react-navigation/native'; 
// Cần thiết để dùng navigation trong component

const productInfo = {
  name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
  // Các màu và ảnh tương ứng
  colors: [
    { code: 'light_blue', color: '#C5FBEB', image: require('./assets/vs_blue.png') },
    { code: 'red', color: '#F30D0D', image: require('./assets/vs_red.png') },
    { code: 'black', color: '#000000', image: require('./assets/vs_black.png') },
    { code: 'dark_blue', color: '#234896', image: require('./assets/vs_silver.png') },
  ],
  defaultImage: require('./assets/vs_blue.png'), // Ảnh mặc định ban đầu (từ Screen 1)
};
function Screen2(){
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
    <View style={{flex: 1,
    backgroundColor: '#C4C4C4', // Màu nền theo mẫu
    padding: 18,}}>
      
      {/* 1. Khu vực Thông tin sản phẩm thu gọn */}
      <View style={{flexDirection: 'row',alignItems: 'flex-start',marginBottom: 15,
    backgroundColor: '#fff',padding: 5}}>
        <Image 
          source={displayImage} // Ảnh thay đổi theo màu được chọn
          style={{width: 112,height: 112,marginRight: 10,}} 
          resizeMode="contain"
        />
        <Text style={{fontSize: 15,fontWeight: 'normal',width: '60%',paddingTop: 10}}>{productInfo.name}</Text>
      </View>

      {/* Đường phân cách */}
      <View style={{height: 1,backgroundColor: '#000',marginVertical: 10,}} />

      {/* 2. Khu vực Chọn Màu */}
      <View style={{flex: 1,backgroundColor: '#fff',alignItems: 'center',paddingTop: 10,}}>
        <Text style={{fontSize: 18,textAlign: 'left',width: '90%',marginBottom: 20,}}>
        Chọn một màu bên dưới:</Text>
        
        {/* Vòng lặp hiển thị các ô màu */}
        {productInfo.colors.map((item) => (
          <TouchableOpacity
            key={item.code}
            style={[
              {width: 85,
              height: 85,borderRadius: 50,marginBottom: 15,
              borderWidth: 1,borderColor: '#999',},
              { backgroundColor: item.color },
              selectedColorCode === item.code && {borderWidth: 4,borderColor: 'blue'},
               // Thêm viền khi chọn
            ]}
            onPress={() => handleColorSelect(item.code)}
          />
        ))}
      </View>

      {/* 3. Nút XONG */}
      <TouchableOpacity 
        style={{backgroundColor: '#4A69A1', 
                padding: 15,borderRadius: 10,alignItems: 'center',marginTop: 20,}}
        onPress={handleDone}
      >
        <Text style={{color: '#fff',fontSize: 20,fontWeight: 'bold',}}>XONG</Text>
      </TouchableOpacity>
    </View>
  )
  
}

function Screen1() {
  // Lấy đối tượng navigation
  const navigation = useNavigation();

  // Định nghĩa hàm chuyển màn hình
  const handleSelectColor = () => {
    // Chuyển sang route có tên là 'Screen2'
    navigation.navigate('Screen2'); 
  };
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
        onPress={handleSelectColor} // Gọi hàm chuyển màn hình
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
        {/* Đặt Screen1 là màn hình khởi đầu */}
        <Stack.Screen 
          name="Screen1" 
          component={Screen1} 
          options={{ title: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng' }}
        />
        {/* Thêm Screen2 (dùng placeholder) */}
        <Stack.Screen 
          name="Screen2" 
          component={Screen2} 
          options={{ title: 'Chọn màu' }}
        />
      </Stack.Navigator>
      </NavigationContainer>

    
    );
}
