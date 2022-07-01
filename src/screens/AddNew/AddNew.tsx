import React, { FC, useState } from 'react';
import { Button, ScrollView, StyleSheet, TextInput } from 'react-native';
import { User } from '../../types';
import { useAppDispatch } from '../../hooks';
import { addNewUser } from '../../appReducer';

const AddNew: FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [user, onChangeUser] = useState<User>({
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    image: '',
    company: {
      address: {
        address: '',
        postalCode: '',
        state: '',
      },
    },
  });

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeUser((prevState) => ({
            ...prevState,
            firstName: text,
          }));
        }}
        placeholderTextColor="black"
        placeholder="First name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeUser((prevState) => ({
            ...prevState,
            lastName: text,
          }));
        }}
        placeholderTextColor="black"
        placeholder="Last name"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
          onChangeUser((prevState) => ({
            ...prevState,
            age: +text,
          }));
        }}
        placeholderTextColor="black"
        placeholder="Age"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeUser((prevState) => ({
            ...prevState,
            image: text,
          }));
        }}
        placeholderTextColor="black"
        placeholder="Image"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeUser((prevState) => ({
            ...prevState,
            company: {
              ...prevState.company,
              address: {
                ...prevState.company.address,
                address: text,
              },
            },
          }));
        }}
        placeholderTextColor="black"
        placeholder="Company address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeUser((prevState) => ({
            ...prevState,
            company: {
              ...prevState.company,
              address: {
                ...prevState.company.address,
                state: text,
              },
            },
          }));
        }}
        placeholderTextColor="black"
        placeholder="Company state"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeUser((prevState) => ({
            ...prevState,
            company: {
              ...prevState.company,
              address: {
                ...prevState.company.address,
                postalCode: text,
              },
            },
          }));
        }}
        placeholderTextColor="black"
        placeholder="Company postal code"
      />

      <Button
        onPress={() => {
          dispatch(addNewUser(user));
          navigation.goBack();
        }}
        title="Add new user"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    minHeight: 50,
    paddingHorizontal: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default AddNew;
