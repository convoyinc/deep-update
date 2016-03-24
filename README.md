# deep-update

[`react-addons-update`](https://www.npmjs.com/package/react-addons-update), except that it will fill in _object_ paths that are missing.

```
// Behold, no error thrown!
const value = update({}, {a: {b: {c: {d: 1234}}}});
```
