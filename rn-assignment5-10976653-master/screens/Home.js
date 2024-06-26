import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.Header}>
        <View>
          <Image source={require('../assets/profile.jpg')} style={[styles.profilepic]} />
        </View>
        <View style={styles.welcomeTexts}>
          <Text style={[styles.welcome, { color: theme.text }]}>Welcome back,</Text>
          <Text style={[styles.username, { color: theme.text }]}>Skimmer_Opoku</Text>
        </View>
        <View style={styles.searchIconView}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        </View>
      </View>
      <Image source={require('../assets/Card.png')} style={styles.creditCard} />
      <View style={styles.transactionsView}>
        <View>
          <View style={styles.send}>
            <Image source={require('../assets/topIcon.png')} style={styles.transactionIcon} />
          </View>
          <Text style={{color: theme.text, marginLeft: 10,}}>Send</Text>
        </View>
        <View>
          <View style={styles.receive}>
            <Image source={require('../assets/downIcon.png')} style={styles.transactionIcon} />
          </View>
          <Text style={{color: theme.text}}>Receive</Text>
        </View>
        <View>
          <View style={styles.loan}>
            <Image source={require('../assets/loan.png')} style={styles.transactionIcon} />
          </View>
          <Text style={{color: theme.text, marginLeft: 10}}>Loan</Text>
        </View>
        <View>
          <View style={styles.topup}>
            <Image source={require('../assets/topup.png')} style={styles.transactionIcon} />
          </View>
          <Text style={{color: theme.text}}>Topup</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-between', marginTop: 30 }}>
        <Text style={{ alignSelf: 'flex-start', fontSize: 18, fontWeight: 'bold', color: theme.text }}>Transactions</Text>
        <Text style={{ alignSelf: 'flex-end', color: theme.iconFocused, fontSize: 18, fontWeight: '400' }}>Sell All</Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ backgroundColor: '#f5f5f5', borderRadius: 40, padding: 10, marginRight: 10 }}>
            <Image source={require('../assets/apple.png')} style={{ width: 25, height: 25 }} />
          </View>
          <View style={{ width: 200 }}>
            <Text style={{ fontWeight: '700', fontSize: 18, color: theme.text }}>Apple Store</Text>
            <Text style={{ fontSize: 16, color: theme.text }}>Entertainment</Text>
          </View>
          <Text style={{ fontWeight: '700', marginTop: 10, fontSize: 16, color: theme.text }}>-$5.99</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ backgroundColor: '#f5f5f5', borderRadius: 40, padding: 10, marginRight: 10 }}>
            <Image source={require('../assets/spotify.png')} style={{ width: 25, height: 25 }} />
          </View>
          <View style={{ width: 200 }}>
            <Text style={{ fontWeight: '700', fontSize: 18, color: theme.text }}>Spotify</Text>
            <Text style={{ fontSize: 16, color: theme.text }}>Music</Text>
          </View>
          <Text style={{ fontWeight: '700', marginTop: 10, fontSize: 16, color: theme.text }}>-$12.99</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ backgroundColor: '#f5f5f5', borderRadius: 40, padding: 10, marginRight: 10 }}>
            <Image source={require('../assets/download.png')} style={{ width: 25, height: 25 }} />
          </View>
          <View style={{ width: 200 }}>
            <Text style={{ fontWeight: '700', fontSize: 18, color: theme.text }}>Money Transfer</Text>
            <Text style={{ fontSize: 16, color: theme.text }}>Transaction</Text>
          </View>
          <Text style={{ fontWeight: '700', marginTop: 10, fontSize: 16, color: theme.text }}>$300</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ backgroundColor: '#f5f5f5', borderRadius: 40, padding: 10, marginRight: 10 }}>
            <Image source={require('../assets/shopping-cart.png')} style={{ width: 25, height: 25 }} />
          </View>
          <View style={{ width: 200, marginBottom: 40, }}>
            <Text style={{ fontWeight: '700', fontSize: 18, color: theme.text }}>Grocery</Text>
            <Text style={{ fontSize: 16, color: theme.text }}>Life</Text>
          </View>
          <Text style={{ fontWeight: '700', marginTop: 10, fontSize: 16, color: theme.text }}>-$88</Text>
        </View>
        {/* Add more transactions similarly */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   Header: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    marginLeft:5,
   },

   profilepic: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 20,
   },

   welcomeTexts: {
    flexDirection: "column",
    marginRight: 100,
   },

   welcome: {
    color: '#6B6B6B',
    fontWeight: '600'
   },

   username: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
   },

   searchIcon: {
    width: 30,
    height: 30,
    borderRadius: 30,
   },

   searchIconView: {
    width: 50,
    height: 50,
    backgroundColor: '#f5f5f5',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 50,
   },

   creditCard: {
   marginTop: 30,
   },

   transactionsView: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around',
    width: 350
   },

   transactionIcon: {
    width: 30,
    height: 30,
   },

   send: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 30,
   },
   receive: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 30,
   },
   loan: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 30,
   },
   topup: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 30,
   },

   sendText: {
    paddingLeft:10,
   },

   loanText: {
    paddingLeft: 10,
   },

   topupText:{
    paddingLeft: 4,
   },


  });