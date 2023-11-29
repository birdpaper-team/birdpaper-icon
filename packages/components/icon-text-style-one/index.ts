import type { App } from 'vue';
import _IconTextStyleOne from './icon-text-style-one.vue';

const IconTextStyleOne = Object.assign(_IconTextStyleOne, {
  install: (app: App) => {
    app.component(_IconTextStyleOne.name, _IconTextStyleOne);
  }
});

export default IconTextStyleOne;