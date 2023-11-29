import type { App } from 'vue';
import _IconTreeTwo from './icon-tree-two.vue';

const IconTreeTwo = Object.assign(_IconTreeTwo, {
  install: (app: App) => {
    app.component(_IconTreeTwo.name, _IconTreeTwo);
  }
});

export default IconTreeTwo;