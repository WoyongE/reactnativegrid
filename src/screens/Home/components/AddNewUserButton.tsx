import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddNewUserButton: FC<{ onPress: () => any }> = ({ onPress }) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={onPress}>
    <Text style={styles.text}>Add new user</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  container: {
    position: 'absolute',
    bottom: 30,
    width: 200,
    padding: 15,
    backgroundColor: '#49dcd8',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default AddNewUserButton;
