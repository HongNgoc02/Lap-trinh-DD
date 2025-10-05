import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// Định nghĩa props cho component Seat
interface SeatProps {
  seatNumber: number;
  isBooked: boolean;
  onPress: () => void;
}

const Seat: React.FC<SeatProps> = ({ seatNumber, isBooked, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.seat,
        {
          backgroundColor: isBooked ? 'red' : 'green',
        },
      ]}
    >
      <Text style={styles.seatText}>{seatNumber}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  seat: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Seat;