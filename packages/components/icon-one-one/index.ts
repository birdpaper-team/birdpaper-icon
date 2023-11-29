import type { App } from 'vue';
import _IconOneOne from './icon-one-one.vue';

const IconOneOne = Object.assign(_IconOneOne, {
  install: (app: App) => {
    app.component(_IconOneOne.name, _IconOneOne);
  }
});

export default IconOneOne;