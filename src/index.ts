import * as _ from 'lodash';
import * as update from 'immutability-helper';

import ensurePath from './ensurePath';

/**
 * Similar to react-addons-update, except that it will ensure that any keys
 * leading up to the update expression are created (rather than throwing).
 *
 * For example:
 *
 *   deepUpdate(value, ['entities', 'currentUser'], {$set: {id: 'abc123'}});
 *
 */
function deepUpdate(value:{}, path:string[], spec:update.ObjectSpec):{} {
  value = ensurePath(value, path);
  let expression = _.reduce([...path].reverse(), (s, k) => ({[k]: s}), spec);

  return update(value, expression);
}

module deepUpdate {} // Allow import * as deepUpdate from 'deep-update';
export = deepUpdate;
