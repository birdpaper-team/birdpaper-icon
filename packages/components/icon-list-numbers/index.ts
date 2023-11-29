import type { App } from 'vue';
import _IconListNumbers from './icon-list-numbers.vue';

const IconListNumbers = Object.assign(_IconListNumbers, {
  install: (app: App) => {
    app.component(_IconListNumbers.name, _IconListNumbers);
  }
});

export default IconListNumbers;