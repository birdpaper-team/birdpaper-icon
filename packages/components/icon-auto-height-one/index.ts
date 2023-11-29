import type { App } from 'vue';
import _IconAutoHeightOne from './icon-auto-height-one.vue';

const IconAutoHeightOne = Object.assign(_IconAutoHeightOne, {
  install: (app: App) => {
    app.component(_IconAutoHeightOne.name, _IconAutoHeightOne);
  }
});

export default IconAutoHeightOne;