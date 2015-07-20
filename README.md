# React Native AddressBook
Access the iOS AddressBook.  

## API
`getContacts` (callback) - returns *all* contacts as an array of objects  
`addContact` (contact, callback) - adds a contact to the AddressBook.  
`updateContact` (contact, callback) - where contact has a valid recordID  
`deleteContact` (contact, callback) - where contact has a valid recordID  

####Permissions Methods (optional)
`checkPermission` (callback) - checks permission to use AddressBook.  
`requestPermission` (callback) - request permission to use AddressBook.  

## Usage Example
```js
var AddressBook = require('react-native-addressbook')

AddressBook.getContacts( function(err, contacts) {
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
  lastName: "Jung",
  firstName: "Carl",
  middleName: "",
  emailAddresses: [{
    label: "work",
    email: "carl-jung@example.com",
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
    email: "mrniet@example.com",
  }],
}

AddressBook.addContact(newPerson, function(err) { /*...*/ });
```

## Updating and Deleting Contacts
```js
//contrived example
AddressBook.getContacts( function(err, contacts){
  //update the first record
  let someRecord = contacts[0];
  someRecord.emailAddresses.push({
    label: "junk",
    email: "mrniet+junkmail@test.com",
  });
  AddressBook.updateContact(someRecord, function(err){ /*...*/ });

  //delete the second record
  AddressBook.deleteContact(contacts[1], function(err) { /*...*/ });
});
```
Update and delete reference contacts by their recordID (as returned by the OS in getContacts). Apple does not gaurantee the recordID will not change, e.g. it may be reassigned during a phone migration. Consequently you should always grab a fresh contact list with `getContacts` before performing update and delete operations.

You can also delete a record using only it's recordID like follows: `AddressBook.deleteContact({recordID: 1}, (err) => {})}`

##Permissions
Permissions will automatically be checked and if needed requested upon calling getContacts. If you need more granular control you can using the checkPermission and requestPermission methods as follows:
```js
AddressBook.checkPermission( function(err, permission) {
  // AddressBook.PERMISSION_AUTHORIZED || AddressBook.PERMISSION_UNDEFINED || AddressBook.PERMISSION_DENIED
  if(permission === 'undefined'){
    AddressBook.requestPermission( function(err, permission) {
      // ...
    });
  }
  if(permission === 'authorized'){
    // yay!
  }
  if(permission === 'denied'){
    // x.x
  }
});
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
