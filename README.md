# React Native AddressBook

A react native module for accessing iOS address book (contacts).

## Usage Example
```js
var AddressBook = require('NativeModules').AddressBook;

AddressBook.checkPermission((err, permission) => {
  // AddressBook.PERMISSION_AUTHORIZED || AddressBook.PERMISSION_UNDEFINED || AddressBook.PERMISSION_DENIED
  if(permission === AddressBook.PERMISSION_UNDEFINED){
    AddressBook.requestPermission((err, permission) => {
      storeContacts()
    })
  }
  if(permission === AddressBook.PERMISSION_AUTHORIZED){
    storeContacts()
  })
  if(permission === AddressBook.PERMISSION_DENIED){
    //handle permission denied
  }
})

function storeContacts(){
  AddressBook.getContacts((err, contacts){
    console.log(contacts)
  })
}
```

## Example Contact Record
```js
{
  familyName: "Bell",
  givenName: "Kate",
  middleName: "Middle",
  emailAddresses: [{
    emailAddress: "kate-bell@mac.com",
    emailLabel: "work"
  }],
  phoneNumbers: [{
    phoneLabel: "mobile",
    phoneNumber: "(555) 555-5555"
  }],
  thumbnailPath: ""
}
```

## Getting started
TBD - not yet published to npm

## Methods
`checkPermission` - checks app's permission to access AddressBook.
`requestPermission` - requests app permission to access AddressBook.
`getContacts` - returns *all* contacts as an array of objects.

## Todo
- [x] `checkPermission` & `requestPermission`
- [x] `getContacts` (get all contacts)
- [ ] Create, Update and Delete methods
- [ ] `getContacts` options (a la camera roll's getPhotos)
- [ ] Automatic permission check & request in `getContacts`
- [ ] Contact Groups support

## Credits
Big thanks to @mattotodd for [RCTAddressBook](https://github.com/mattotodd/react-native-addressbook-ios) which this is largely based on.
