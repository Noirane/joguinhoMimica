
import React from "react";
import {Pressable, StyleSheet,Text, View } from "react-native";
import FundoCateg from "../componentes/FundoCategoria"
import Ionicons from '@expo/vector-icons/Ionicons'




const data = [
  { isChecked: false },
  { isChecked: false },
  { isChecked: false },
  { isChecked: false },
  { isChecked: false },
  { isChecked: false },
  { ultimClick:-1    } // se ultimo click , recebe check

];


const MyCheckbox = (props) => {
  <Text> {props.indiceDVez}</Text> 
  data[0].isChecked= (!data[0].isChecked);
  return(
 
      <> <Text> {props.someText}</Text> 
  
       </> 
    
  )

}


export default class App extends React.Component {

  
 render(){
  return(
    <View style={styles.appContainer}>
      <View style={styles.checkboxContainer}> 
      <FundoCateg/>
        <MyCheckbox someText='100' />

        <Pressable 
            style={[styles.checkboxBase, styles.checkboxChecked]}
            onPress={() => data[0].isChecked=true}>  
            <MyCheckbox someText='0' />
            {data[0].isChecked==true?  <Ionicons name="checkmark" size={40} color="black" />:null}      
        </Pressable>

        <Pressable 
            style={[styles.checkboxBase2, styles.checkboxChecked2]}
            onPress={() => data[0].isChecked=true}> 
            <MyCheckbox someText='1' />
            {data[0].isChecked==true?  <Ionicons name="checkmark" size={40} color="black" />:null}      
        </Pressable>

        <Pressable 
            style={[styles.checkboxBase2, styles.checkboxBase3]}
            onPress={() => data[0].isChecked=true}> 
            <MyCheckbox someText='2' />
            {data[0].isChecked==true?  <Ionicons name="checkmark" size={40} color="black" />:null}      
        </Pressable>

        


      </View>

      

    

    </View>
  
  );
 }

 

}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:85,
    left:-130,
    width: 45,
    height: 45,
    
  },

  checkboxBase2: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:165,
    left:-175,
    width: 45,
    height: 45,
    
  },

  checkboxBase3: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:250,
    left:-220,
    width: 45,
    height: 45,
    
  },

  checkboxBase4: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:335,
    left:-265,
    width: 45,
    height: 45,
    
  },

  checkboxBase5: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:430,
    left:-310,
    width: 45,
    height: 45,
    
  },
  checkboxBase6: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:520,
    left:-355 ,
    width: 45,
    height: 45,
    
  },

  
  
  checkboxChecked: {
    backgroundColor: '#CBE2FF',
  },

  appContainer: {
    flex: 1,
  },

  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },

  Pressable:{
    width: 223,
    height: 64,
   
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



/*import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FundoCateg from "../componentes/FundoCategoria"




const data = [
  { isChecked: false },
  { isChecked: false },
  { isChecked: false },
  { isChecked: false },
  { isChecked: false },
  { isChecked: false },
  { ultimClick:-1    } // se ultimo click , recebe check

];



function MyCheckbox ({
  checked,
  onChange ,
  
  
  
}) {
 function onCheckmarkPress() { //mudr  const data
    onChange(!checked);
    data[0].isChecked= (!data[0].isChecked);


    
    
  }
  alert (data[0].isChecked);
  alert (data[1].isChecked);
  alert (data[2].isChecked);

  return (

    
        
    <>

      <Pressable 
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => data[0].isChecked=true}>
            {data[0].isChecked==true?  <Ionicons name="checkmark" size={40} color="black" />:null}      
      </Pressable>

      


      <Pressable
            style={[styles.checkboxBase2, checked && styles.checkboxChecked2]}
            onPress={() => data[1].isChecked=true}>      
            {data[1].isChecked==true?  <Ionicons name="checkmark" size={40} color="black" />:null}
              
      </Pressable>
      
      <Pressable
        style={[styles.checkboxBase3, checked && styles.checkboxChecked]}
        onPress={(data[2].isChecked=false,  onCheckmarkPress )}>
        {checked && <Ionicons name="checkmark" size={40} color="black" />}
      </Pressable>


    </>

    

  );
}




export default function App() {
  
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





const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:85,
    left:-130,
    width: 45,
    height: 45,
    
  },

  checkboxBase2: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:165,
    left:-175,
    width: 45,
    height: 45,
    
  },

  checkboxBase3: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:250,
    left:-220,
    width: 45,
    height: 45,
    
  },

  checkboxBase4: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:335,
    left:-265,
    width: 45,
    height: 45,
    
  },

  checkboxBase5: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:430,
    left:-310,
    width: 45,
    height: 45,
    
  },
  checkboxBase6: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor:  '#CBE2FF',
    top:520,
    left:-355 ,
    width: 45,
    height: 45,
    
  },

  
  
  checkboxChecked: {
    backgroundColor: '#CBE2FF',
  },

  appContainer: {
    flex: 1,
  },

  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },

  Pressable:{
    width: 223,
    height: 64,
   
  },

  checkboxContainer: {
    flexDirection: 'row',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
}); */
