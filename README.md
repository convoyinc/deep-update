# deep-update

[`react-addons-update`](https://facebook.github.io/react/docs/update.html), except that it will fill in _object_ paths that are missing.

```
const value = {a: {b: {c: {d: 1234}}}};
// Behold, no error thrown!
const newValue = deepUpdate(value, ['a', 'b', 'c', 'd'], {$set: 2345});
```
