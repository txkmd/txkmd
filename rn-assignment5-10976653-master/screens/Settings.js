import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme, themes, } from '../ThemeContext';


export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = themes === theme.dark;
  const black = '#000';
  const white = '#fff';

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.background }}>
      <Text style={{ fontSize: 30, fontWeight: '600', marginBottom: 50, color: theme.text }}>Settings</Text>

      <View style={{ borderWidth: 2, borderColor: theme.background, width: '100%', marginBottom: 20, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, marginRight: 205, color: theme.text }}>Language      </Text>
        <TouchableOpacity>
          <Image source={require('../assets/right.png')} style={{ height: 20, width: 20, marginLeft: 'auto', marginRight: 30 }} />
        </TouchableOpacity>
      </View>

      <View style={{ borderWidth: 2, borderColor: theme.background, width: '100%', marginBottom: 20, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, marginRight: 200, color: theme.text }}>My Profile      </Text>
        <TouchableOpacity>
          <Image source={require('../assets/right.png')} style={{ height: 20, width: 20, marginLeft: 'auto', marginRight: 30 }} />
        </TouchableOpacity>
      </View>

      <View style={{ borderWidth: 2, borderColor: theme.background, width: '100%', marginBottom: 20, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, marginRight: 200, color: theme.text }}>Contact Us    </Text>
        <TouchableOpacity>
          <Image source={require('../assets/right.png')} style={{ height: 20, width: 20, marginLeft: 'auto', marginRight: 30 }} />
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 2, borderColor: theme.background, width: '100%', marginBottom: 20, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, marginRight: 140, color: theme.text }}>Change Password   </Text>
        <TouchableOpacity>
          <Image source={require('../assets/right.png')} style={{ height: 20, width: 20, marginLeft: 'auto', marginRight: 30 }} />
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 2, borderColor: theme.background, width: '100%', marginBottom: 20, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, marginRight: 180, color: theme.text }}>Privacy Policy   </Text>
        <TouchableOpacity>
          <Image source={require('../assets/right.png')} style={{ height: 20, width: 20, marginLeft: 'auto', marginRight: 30 }} />
        </TouchableOpacity>
      </View>
      

      <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 50, marginBottom: 250 }}>
       <View style={{flexDirection: 'row'}}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft:-20, marginRight: 230, color:  isDarkMode ? white : black }}>Theme</Text>
        <Image
          source={isDarkMode ? require('../assets/on-button.png') : require('../assets/off-button.png')}
          style={{ height: 40, width: 40, }}
        />
       </View> 
      </TouchableOpacity>
    </View>
  );
}
