import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Flattest = () => {
  const data = [
    { id: 1, name: 'ahash' },
    { id: 2, name: 'Dinsha' },
    { id: 3, name: 'Shalu' },
    { id: 4, name: 'aaa' },
    { id: 5, name: 'bbb' },
    { id: 6, name: 'ccc' },
    { id: 7, name: 'ddd' },
    { id: 8, name: 'eee' },
    { id: 9, name: 'fff' },
    { id: 10, name: 'ggg' },
    { id: 11, name: 'hhh' },
    { id: 12, name: 'iii' },
    { id: 13, name: 'jjj' },
    { id: 14, name: 'kkk' },
    { id: 15, name: 'lll' },
    { id: 16, name: 'mmm' },
    { id: 17, name: 'nnn' },
    { id: 18, name: 'ooo' },
    { id: 19, name: 'ppp' },
    { id: 20, name: 'qqq' },
    { id: 21, name: 'rrr' },
    { id: 22, name: 'sss' },
    { id: 23, name: 'ttt' },
    { id: 24, name: 'uuu' },
    { id: 25, name: 'vvv' },
    { id: 26, name: 'www' },
    { id: 27, name: 'xxx' },
    { id: 28, name: 'yyy' },
    { id: 29, name: 'zzz' },
    { id: 30, name: 'ab' },
  ];

  const getItemBackgroundColor = (index) => {
    const colors = ['#FF5733', '#33FF6A', '#3385FF']; // Red, Green, Blue
    const patternLength = 3; // The length of the color pattern
    const colorIndex = (index % patternLength) % colors.length;
    return colors[colorIndex];
  };


  const renderItem = ({ item, index }) => {
    const backgroundColor = getItemBackgroundColor(index);
    
    return (
      <View style={[styles.item, { backgroundColor }]}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal // Enable horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hide the horizontal scrollbar
        numColumns={numColumns} // Set the number of columns dynamically
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
const numColumns = Math.ceil(data.length / 3);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 16,
    },
    listContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      paddingVertical: 8,
    },
    item: {
      backgroundColor: '#fff3e6',
      borderRadius: 8,
      marginBottom: 12,
      padding: 16,
      elevation: 4,
    },
    itemText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });


export default Flattest;
