import type { App } from 'vue';
import _IconMarginOne from './icon-margin-one.vue';

const IconMarginOne = Object.assign(_IconMarginOne, {
  install: (app: App) => {
    app.component(_IconMarginOne.name, _IconMarginOne);
  }
});

export default IconMarginOne;