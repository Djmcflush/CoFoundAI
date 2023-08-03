import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';



const actionItems: any[] = [
    /* List of person data from earlier */
    ];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>  
        <View>
          {actionItems.map((item) => {
            return (
              <View>
                <Text style={styles.item}>{item.description}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  }
});