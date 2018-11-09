/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import * as utils from '../utils.js';
import {flush} from '../flush.js';
import {addEventListener, removeEventListener} from '../patch-events.js';

export const EventTarget = {

  /** @this {Node} */
  dispatchEvent(event) {
    flush();
    return this[utils.NATIVE_PREFIX + 'dispatchEvent'](event);
  },

  addEventListener: addEventListener,

  removeEventListener: removeEventListener

};