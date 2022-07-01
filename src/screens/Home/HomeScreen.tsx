import React, { FC, useEffect } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUsers } from '../../appReducer';
import AddNewUserButton from './components/AddNewUserButton';

const ItemSeparator = () => <View style={styles.separator} />;

const HomeScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id.toString()}
        data={users}
        numColumns={2}
        renderItem={({ item, index }) => {
          const isEvenTile = index % 2 === 0;
          const marginRight = isEvenTile ? 20 : 0;

          return (
            <TouchableOpacity
              style={[styles.userContainer, { marginRight }]}
              onPress={() => {
                navigation.navigate('UserDetails', {
                  user: item,
                });
              }}>
              <ImageBackground style={styles.imageContainer} source={{ uri: item.image }}>
                <View style={[styles.overlayContainer, StyleSheet.absoluteFill]} />
                <View style={styles.userContentContainer}>
                  <Text style={styles.text}>
                    {item.firstName}, {item.age}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />

      <AddNewUserButton
        onPress={() => {
          navigation.navigate('AddNewUser');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: 'white',
  },
  imageContainer: {
    flex: 1,
  },
  userContentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
  userContainer: {
    flex: 1,
    height: 150,
    overflow: 'hidden',
    borderRadius: 10,
    position: 'relative',
  },
  separator: {
    height: 10,
  },
  overlayContainer: {
    opacity: 0.7,
    backgroundColor: 'black',
    flex: 1,
  },
});

export default HomeScreen;
