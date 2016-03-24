# deep-update

[`react-addons-update`](https://facebook.github.io/react/docs/update.html), except that it will fill in _object_ paths that are missing.

```
// Behold, no error thrown!
const value = update({}, {a: {b: {c: {d: 1234}}}});
```
