import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

export default function App() {
  const [kata, setKata] = useState('Welcome to Mobile App Development class');

  return (
    <View style={styles.container}>

      <View style={styles.header}>
      </View>

      <View style={styles.body}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 32,
          }}
        >
          {kata}
        </Text>

        <Button
          onPress={() => {
            if (kata === 'Mobile A') {
              setKata('Mobile B');
            } else {
              setKata('Mobile A');
            }
          }}
          title="Press this"
        />

        <View
          style={{
            width: 80,
          }}
        >
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 0,
  },

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
