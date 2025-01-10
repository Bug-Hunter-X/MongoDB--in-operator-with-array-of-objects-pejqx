```javascript
// Correct usage using $or operator
db.collection.find({$or: [{field: {a:1}}, {field: {a:2}}]});
// Alternatively if the field is an array itself, this is correct
db.collection.find({field: {$elemMatch: {a:1}}});
```