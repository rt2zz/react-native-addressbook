var RCTAddressBook = require('react-native').NativeModules.AddressBook;

var AddressBook = {

  getContacts: function(callback) {
    RCTAddressBook.getContacts(callback);
  },

  addContact: function(record, callback) {
    RCTAddressBook.addContact(record, callback);
  },

  checkPermission: function(callback) {
    RCTAddressBook.checkPermission(callback);
  },

  requestPermission: function(callback) {
    RCTAddressBook.requestPermission(callback);
  }
};

module.exports = AddressBook;
