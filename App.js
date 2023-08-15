import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity, Linking,Switch } from 'react-native';
import React,{useState} from 'react';

export default function App() {

  
  return (
    <View>
      
      

      <View style={{ textAlign: 'center' }}>

        <View style={{ width: 300, height: 300, borderRadius: 200, overflow: 'hidden', marginTop: 20, alignSelf: 'center' }}>
          <Image source={require('./assets/profile.jpg')} style={{ width: '100%', height: '100%' }} />
        </View>

      </View>

      <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>Profile Info</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Image source={require('./assets/nameIcon.png') } style={{width:30,height:30,borderRadius:60}}/>
          <Text style={styles.infoText}>
            Aditya Kiran Lad
          </Text>
        </View>

        <View style={styles.info}>
        <Image source={require('./assets/emailIcon.png') } style={{width:30,height:30,borderRadius:60}}/>
          <Text style={styles.infoText}>
            aditya.lad.2004@gmail.com
          </Text>
        </View>

        <View style={styles.info}>
        <Image source={require('./assets/phoneIcon.png') } style={{width:30,height:30,borderRadius:60}}/>
          <Text style={styles.infoText}>
            +91 9579318602
          </Text>
        </View>

        <View style={styles.info}>
        <Image source={require('./assets/jobIcon.png') } style={{width:30,height:30}}/>
          <Text style={styles.infoText}>
            React native developer
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>Connect with me</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialMediaContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/aditya-lad-3b754a268/')}>
          <Image source={require('./assets/linkedin.png')} style={styles.socialMediaIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/AdityaLad2004')}>
          <Image source={require('./assets/github.png')} style={styles.socialMediaIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/aditya.lad.2004/')}>
          <Image source={require('./assets/insta.jpeg')} style={styles.socialMediaIcon} />
        </TouchableOpacity>
        
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#808080',
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20
  },

  infoContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  infoText: {
    fontSize: 24,
    marginLeft:5
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialMediaIcon: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },

  info:{
    backgroundColor:'#E5E4E2',
    borderWidth:1,
    borderRadius:60,
    display:'flex',
    marginTop:20,
    flexDirection:'row',
    padding:10
  }
});
