import type { App } from 'vue';
import _IconRightOne from './icon-right-one.vue';

const IconRightOne = Object.assign(_IconRightOne, {
  install: (app: App) => {
    app.component(_IconRightOne.name, _IconRightOne);
  }
});

export default IconRightOne;