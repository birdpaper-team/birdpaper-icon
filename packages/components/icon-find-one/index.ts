import type { App } from 'vue';
import _IconFindOne from './icon-find-one.vue';

const IconFindOne = Object.assign(_IconFindOne, {
  install: (app: App) => {
    app.component(_IconFindOne.name, _IconFindOne);
  }
});

export default IconFindOne;