import { View, Text, TouchableOpacity, Image } from "react-native";

const item ({ img, title, description }) => {

return(

  <View style={{ flexDirection: "row", padding: 10, height: 120, border Topwidth: 1, borderBottomwidth: 1,
borderColor: "gray" }}>

{/* Image section */}

    <View style={{ flex: 0.3 }}>
      <Image style={{ height: 80, width: 80 }} source={img} />
    </View>

{/* Title and description */}

    <View style={{ flex: 0.5,justifyContent:'center'}}>   
      <View style={{ flexDirection: "column" }}>
        <Text>{title}</Text>
        <Text style={{ flexDirection: "row" }}>
        Shop <Text style={{ color: "red" }}>{description}</Text></Text>
      </View>
    </View>

{/* Chat button section */}

    <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={{ backgroundColor: "red", height: 40, width: 100, justifyContent: "center",
      alignItems: "center" }}>
        <Text style={{ color: "white", fontweight: bold" }}>Chat</Text>
      </TouchableOpacity>
    </View>

</View>>;};

export default item;