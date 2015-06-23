var RCTAddressBook = require('NativeModules').AddressBook
var invariant = require('invariant')
var logError = require('logError')
var warning = require('warning')

var AddressBook = {

  getContacts(callback) {
    RCTAddressBook.getContacts(callback)
  },

  addContact(record, callback) {
    RCTAddressBook.addContact(record, callback)
  },

  checkPermission(callback) {
    RCTAddressBook.checkPermission(callback)
  },

  requestPermission(callback) {
    RCTAddressBook.requestPermission(callback)
  }
}

module.exports = AddressBook
