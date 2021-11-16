import { removeHidden } from './js/removeHidden.js';
import { addHidden } from './js/addHidden.js';

removeHidden();
addHidden();

setInterval(() => {
  removeHidden();
  addHidden();
}, 4700);
