import type { App } from 'vue';
import _IconChristmasTreeOne from './icon-christmas-tree-one.vue';

const IconChristmasTreeOne = Object.assign(_IconChristmasTreeOne, {
  install: (app: App) => {
    app.component(_IconChristmasTreeOne.name, _IconChristmasTreeOne);
  }
});

export default IconChristmasTreeOne;