# React Native AddressBook

Interact with the iOS AddressBook

## API
`checkPermission` (callback) - checks app's permission to access AddressBook.
`requestPermission` (callback) - requests app permission to access AddressBook.
`getContacts` (callback) - returns *all* contacts as an array of objects.
`addContact` (contact, callback) - adds a contact to the AddressBook.

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
  lastName: "Bell",
  firstName: "Kate",
  middleName: "Middle",
  emailAddresses: [{
    label: "work",
    email: "kate-bell@mac.com",
  }],
  phoneNumbers: [{
    label: "mobile",
    number: "(555) 555-5555",
  }],
  thumbnailPath: "",
}
```

## Adding Contacts
Currently all fields from the contact record except for thumbnailPath are supported for writing
```js
var newPerson = {
  lastName: "Nietzsche",
  firstName: "Friedrich",
  emailAddresses: [{
    label: "work",
    email: "mrniet@gmail.com",
  }],
  phoneNumbers: [{
    label: "mobile",
    number: "(555) 555-5555",
  }],
}

AddressBook.addContact(newPerson, (err) => {
  if(!err) console.log('contact added!')
})

```

## Getting started

1. `npm install react-native-addressbook@latest --save`
2. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
3. add `./node_modukes/react-native-addressbook/RCTAddressBook.xcodeproj`
4. In the XCode project navigator, select your project, select the `Build Phases` tab and in the `Link Binary With Libraries` section add **libRCTAddressBook.a**

## Todo
- [x] `checkPermission` & `requestPermission`
- [x] `getContacts` (get all contacts)
- [x] `addContact`
- [ ] Update and Delete methods
- [ ] `getContacts` options (a la camera roll's getPhotos)
- [ ] Automatic permission check & request in `getContacts`
- [ ] Contact Groups support

## Credits
Big thanks to @mattotodd for [RCTAddressBook](https://github.com/mattotodd/react-native-addressbook-ios) which this is largely based on.
