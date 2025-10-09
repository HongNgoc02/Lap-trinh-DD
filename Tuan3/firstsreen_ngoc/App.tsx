import { Text, SafeAreaView, StyleSheet,View ,Image,TouchableOpacity} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';



export default function App() {
  return (
    <View style={{
      flex:1,
      flexDirection:'colum',
      backgroundColor:'#00CCF9'}}>
      <View style ={{ 
        flex:2, 
        flexDirection:'colum',
        justifyContent: 'center',
        alignItems:'center',}}>
        <Image source={require('./assets/ellipse.png')} style={{ width: 140, height: 140 }} />
      </View>
      <View style ={{ 
        flex: 1, 
        flexDirection:'colum' ,
        justifyContent: "center",
        alignItems: "center",}}>
        <Text style={{
          fontWeight: "bold",
          fontFamily: "Roboto", 
          fontSize:25,
          textAlign: 'center',
          alignSelf: 'center',}}>GROW {"\n"}YOUR BUSINESS</Text>
      </View>
      <View style ={{ flex:1,
        justifyContent: "center",
        alignItems: "center",
        
       }}>
        <Text style={{
          fontWeight: "bold",
          fontFamily: "Roboto", 
          fontSize:18,width:302,height:36,
          textAlign: 'center',
          alignSelf: 'center',
          }}>
        We will help you to grow your business using online server</Text>
      </View>
      <View style ={{ 
          flex:1, 
          flexDirection:'row', 
          justifyContent:'space-evenly', 
          alignItems:'center',}}>
        <TouchableOpacity style={{
          backgroundColor: '#E3C000', 
          color: 'black' , 
          height:48, width:119, 
          fontSize:20,      
          fontWeight:'bold',
          fontFamily: "Roboto",
          justifyContent: "center",
          alignItems:"center"
        }}>LOGIN</TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#E3C000', 
          color: 'black' , 
          height:48, width:119, 
          fontSize:20,      
          fontWeight:'bold',
          fontFamily: "Roboto",
          alignItems:"center",
          justifyContent:"center"
        }}>SING UP</TouchableOpacity>
      </View>
      
      </View>
    

  );
}

const styles = StyleSheet.create({
  
});
