import * as _ from 'lodash';
import * as update from 'react-addons-update';

/**
 * Ensures that `state` has a series of nested objects matching the keys defined
 * in `path`.
 *
 * If any are missing, they will be built. The original `state` and its children
 * are **not** mutated.
 */
export default function ensurePath(value:{}, path:string[]):{} {
  if (!_.every(path, _.isString)) {
    throw new TypeError(`fillPath can only construct objects. Please pass string keys for the path.`);
  }

  // Fill in all missing keys along the path.
  let node:{} = value;
  for (let i = 0; i < path.length; i++) {
    let key = path[i];
    if (_.isUndefined(node[key])) {
      let missing    = _.reduce(path.slice(i).reverse(),    (s, k) => ({[k]: s}), {});
      let expression = _.reduce(path.slice(0, i).reverse(), (s, k) => ({[k]: s}), {$merge: missing});
      value = update(value, expression);
      break;
    }

    node = node[key];
  }

  return value;
}
