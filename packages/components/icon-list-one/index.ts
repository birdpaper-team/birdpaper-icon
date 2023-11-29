import type { App } from 'vue';
import _IconListOne from './icon-list-one.vue';

const IconListOne = Object.assign(_IconListOne, {
  install: (app: App) => {
    app.component(_IconListOne.name, _IconListOne);
  }
});

export default IconListOne;