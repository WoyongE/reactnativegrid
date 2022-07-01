import React, { FC, useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { User } from '../../types';

const UserDetails: FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const user = route.params.user as User;
  const name = user.firstName + ' ' + user.lastName;
  const companyAddress = user.company.address;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: user.image }} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {name}, {user.age}
        </Text>
        <Text>
          Address: {companyAddress.address}, {companyAddress.state}, {companyAddress.postalCode}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 400,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
});

export default UserDetails;
