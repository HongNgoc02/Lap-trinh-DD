// import {Product} from "../types/Product";
// import {Card,Button} from "react-native-paper";
// import {Text, TouchableOpacity} from "react-native";

// type Props = {
//   data: Product;
//   onPressDeleteBtn: (id: string) => void;
//   onPressViewDetailsBtn: (product: Product) => void;
//   onUpdate: (product: Product) => void;
// };

// export const ProductCard =({data,onPressDeleteBtn}: Props)=>{

//   return (
//   <Card style ={{margin : 10}}>
//     <Card.Title title = {data.title}/>
//     <Card.Content>
//       <Text>Price: {data.price}</Text>
//     </Card.Content>
//     <Card.Actions>
//       <Button mode="contained" onPress={() => {}}> 
//         Update
//       </Button>

//       <Button mode="contained" onPress={() => onPressDeleteBtn(data.id)}> 
//         Delete
//       </Button>

//       <Button mode="contained" onPress={() => {}}> 
//         View Detail
//       </Button>

//     </Card.Actions>
//   </Card>
//   );
 
// };
import { Button, Card, TextInput } from "react-native-paper";
import { Product } from "../types/Product";
import { Text } from "react-native";
import { useState } from "react";

type Props = {
  data: Product;
  onPressDeleteBtn: (id: string) => void;
  onPressViewDetailsBtn: (product: Product) => void;
  onUpdate: (product: Product) => void;
};

export const ProductCard = ({
  data,
  onPressDeleteBtn,
  onPressViewDetailsBtn,
  onUpdate,
}: Props) => {
  const [input, setInput] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      data.title = input;
      onUpdate(data);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={data.title} />
      <Card.Content>
        {!isEditing && <Text>Price: {data.price}</Text>}

        {isEditing && (
          <TextInput value={input} onChangeText={(text) => setInput(text)} />
        )}
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={handleEdit}>
          Update
        </Button>
        <Button mode="contained" onPress={() => onPressDeleteBtn(data.id)}>
          Delete
        </Button>
        <Button mode="contained" onPress={() => onPressViewDetailsBtn(data)}>
          View Details
        </Button>
      </Card.Actions>
    </Card>
  );
};