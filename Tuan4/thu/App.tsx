// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Pressable } from 'react-native';

// const totalSeats = 20;

// export default function App() {
//   // Khởi tạo trạng thái ban đầu cho 20 ghế, tất cả đều còn trống
//   const [seatsStatus, setSeatsStatus] = useState(
//     Array.from({ length: totalSeats }, (_, i) => ({
//       id: i + 1,
//       isBooked: false,
//     }))
//   );

//   // Hàm xử lý khi người dùng nhấn vào ghế
//   const handleSeatPress = (seatId: number) => {
//     setSeatsStatus((prevStatus) =>
//       prevStatus.map((seat) =>
//         seat.id === seatId ? { ...seat, isBooked: !seat.isBooked } : seat
//       )
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.screenText}>MÀN HÌNH</Text>
//       <View style={styles.screen} />

//       <View style={styles.seatsContainer}>
//         {seatsStatus.map((seat) => (
//           <Pressable
//             key={seat.id}
//             onPress={() => handleSeatPress(seat.id)}
//             style={[
//               styles.seat,
//               {
//                 backgroundColor: seat.isBooked ? 'red' : 'green', // Thay đổi màu dựa trên trạng thái
//               },
//             ]}
//           >
//             <Text style={styles.seatText}>{seat.id}</Text>
//           </Pressable>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   screenText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   screen: {
//     width: '90%',
//     height: 50,
//     backgroundColor: '#333',
//     marginBottom: 30,
//     borderRadius: 5,
//   },
//   seatsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: 15,
//   },
//   seat: {
//     width: 50,
//     height: 50,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   seatText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MovieScreen from './components/MovieScreen';
import Seat from './components/Seat';

const totalSeats = 20;

// Định nghĩa kiểu dữ liệu cho trạng thái của ghế
interface SeatStatus {
  id: number;
  isBooked: boolean;
}

export default function App() {
  const [seatsStatus, setSeatsStatus] = useState<SeatStatus[]>(
    Array.from({ length: totalSeats }, (_, i) => ({
      id: i + 1,
      isBooked: false,
    }))
  );

  const handleSeatPress = (seatId: number) => {
    setSeatsStatus(prevStatus =>
      prevStatus.map(seat =>
        seat.id === seatId ? { ...seat, isBooked: !seat.isBooked } : seat
      )
    );
  };

  return (
    <View style={styles.container}>
      <MovieScreen />
      <View style={styles.seatsContainer}>
        {seatsStatus.map((seat) => (
          <Seat
            key={seat.id}
            seatNumber={seat.id}
            isBooked={seat.isBooked}
            onPress={() => handleSeatPress(seat.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  seatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },
});