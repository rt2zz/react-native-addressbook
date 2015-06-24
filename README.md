# React Native AddressBook
Access the iOS AddressBook.

## API
`getContacts` (callback) - returns *all* contacts as an array of objects  
`addContact` (contact, callback) - adds a contact to the AddressBook.  
`updateContact` (contact, callback) - where contact has a valid recordID
`deleteContact` (contact, callback) - where contact has a valid recordID

####Permissions Methods (optional)
`checkPermission` (callback) - checks app's permission to access AddressBook.  
`requestPermission` (callback) - requests app permission to access AddressBook.  

## Usage Example
```js
var AddressBook = require('react-native-addressbook')

AddressBook.getContacts((err, contacts){
  if(err && err.type === 'permissionDenied'){
    // x.x
  }
  else{
    console.log(contacts)
  }
})
```

## Example Contact Record
```js
{
  recordID: 1,
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
  //...
})
```

##Permissions
Permissions will automatically be checked and if needed requested upon calling getContacts. If you need more granular control you can using the checkPermission and requestPermission methods as follows:
```js
AddressBook.checkPermission((err, permission) => {
  // AddressBook.PERMISSION_AUTHORIZED || AddressBook.PERMISSION_UNDEFINED || AddressBook.PERMISSION_DENIED
  if(permission === AddressBook.PERMISSION_UNDEFINED){
    AddressBook.requestPermission((err, permission) => {
      // yay!
    })
  }
  if(permission === AddressBook.PERMISSION_AUTHORIZED){
    // yay!
  })
  if(permission === AddressBook.PERMISSION_DENIED){
    // x.x
  }
})
```

## Getting started
1. `npm install react-native-addressbook`
2. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
3. add `./node_modules/react-native-addressbook/RCTAddressBook.xcodeproj`
4. In the XCode project navigator, select your project, select the `Build Phases` tab and in the `Link Binary With Libraries` section add **libRCTAddressBook.a**

## Todo
- [x] `checkPermission` & `requestPermission`
- [x] `getContacts` (get all contacts)
- [x] `addContact`
- [x] Update and Delete methods
- [ ] `getContacts` options (a la camera roll's getPhotos)
- [x] Automatic permission check & request in `getContacts`
- [ ] Contact Groups support

## Credits
Thanks to @mattotodd whose [RCTAddressBook](https://github.com/mattotodd/react-native-addressbook-ios) this is largely derived from.
