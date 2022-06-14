import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FundoCateg from "../componentes/FundoCategoria"
/*https://docs.expo.dev/ui-programming/implementing-a-checkbox/*/

function MyCheckbox({
  checked,
  onChange ,
}) {
  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

function App() {
  const [checked, onChange] = useState(false);
  
  return (
    <View style={styles.appContainer}>
    
      <View style={styles.checkboxContainer}>
      <FundoCateg/>
        <MyCheckbox
          checked={checked}
          onChange={onChange} />
     
      </View>
 
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
    top:50,
    left:-50,
  },

  checkboxChecked: {
    backgroundColor: 'coral',
  },

  appContainer: {
    flex: 1,
  },

  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },

  checkboxContainer: {
    flexDirection: 'row',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
});
