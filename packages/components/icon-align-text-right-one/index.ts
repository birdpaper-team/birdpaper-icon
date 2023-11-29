import type { App } from 'vue';
import _IconAlignTextRightOne from './icon-align-text-right-one.vue';

const IconAlignTextRightOne = Object.assign(_IconAlignTextRightOne, {
  install: (app: App) => {
    app.component(_IconAlignTextRightOne.name, _IconAlignTextRightOne);
  }
});

export default IconAlignTextRightOne;