var React = require('react-native');
var { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableHighlight } = React;
var ContactList = require('./components/ContactList')
var AddressBook = require('react-native-addressbook')

var AddressbookDemo = React.createClass({
  getInitialState() {
    return {
      contacts: [],
    }
  },

  loadContacts(){
    AddressBook.getContacts( (err, contacts) => {
      console.log('GET CONTACTS', err, contacts)
      if(err && err.type === 'permissionDenied'){
        // x.x
      }
      else{
        this.setState({contacts: contacts})
      }
    })
  },

  newContact(){
    var newPerson = {
      lastName: "Nietzsche",
      firstName: "Friedrich",
      emailAddresses: [{
        label: "work",
        email: "mrniet@example.com",
      }],
    }

    AddressBook.addContact(newPerson, (err) => {
      console.log('NEW CONTACT', err, newPerson)
    })
  },

  updateContact(){
    let firstContact = this.state.contacts[0]
    firstContact.emailAddresses.push({
      label: "junk"+Math.round(Math.random()*100),
      email: "mrniet+"+Math.round(Math.random()*100)+"@test.com",
    })
    AddressBook.updateContact(firstContact, (err) => {
      console.log('UPDATE CONTACT', err, firstContact)
    })
  },

  deleteContact(){
    let firstContact = this.state.contacts[0]
    AddressBook.deleteContact(firstContact, (err) => {
      console.log('DELETE CONTACT', err)
    })
  },

  requestPermissions(){
    AddressBook.requestPermission( (err, permission) => {
      console.log('REQUEST PERMISSION', err, permission)
    })
  },

  checkPermission(){
    AddressBook.checkPermission( (err, permission) => {
      console.log('CHECK PERMISSION', err, permission)
    })
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.note}>
          all actions are console.logged
        </Text>
        <TouchableHighlight style={styles.button} onPress={this.loadContacts}>
          <Text>Load Contacts</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.newContact}>
          <Text>Create Contact</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.updateContact}>
          <Text>Update Contact</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.deleteContact}>
          <Text>Delete Contact</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.requestPermissions}>
          <Text>Request Permissions</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.checkPermissions}>
          <Text>Check Permissions</Text>
        </TouchableHighlight>

        <ContactList contacts={this.state.contacts} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  note: {
    fontSize:20,
    fontWeight:'bold',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,.6)',
    padding:5,
    borderRadius:3,
    borderWidth:1,
    margin: 5,
    borderColor: 'rgba(0,0,0,.8)'
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AddressbookDemo', () => AddressbookDemo);
