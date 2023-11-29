import type { App } from 'vue';
import _IconFoldUpOne from './icon-fold-up-one.vue';

const IconFoldUpOne = Object.assign(_IconFoldUpOne, {
  install: (app: App) => {
    app.component(_IconFoldUpOne.name, _IconFoldUpOne);
  }
});

export default IconFoldUpOne;