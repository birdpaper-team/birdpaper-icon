import type { App } from 'vue';
import _IconAlignRightOne from './icon-align-right-one.vue';

const IconAlignRightOne = Object.assign(_IconAlignRightOne, {
  install: (app: App) => {
    app.component(_IconAlignRightOne.name, _IconAlignRightOne);
  }
});

export default IconAlignRightOne;