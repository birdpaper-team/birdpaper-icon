import type { App } from 'vue';
import _IconExpandDownOne from './icon-expand-down-one.vue';

const IconExpandDownOne = Object.assign(_IconExpandDownOne, {
  install: (app: App) => {
    app.component(_IconExpandDownOne.name, _IconExpandDownOne);
  }
});

export default IconExpandDownOne;