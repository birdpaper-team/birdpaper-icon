import type { App } from 'vue';
import _IconFocusOne from './icon-focus-one.vue';

const IconFocusOne = Object.assign(_IconFocusOne, {
  install: (app: App) => {
    app.component(_IconFocusOne.name, _IconFocusOne);
  }
});

export default IconFocusOne;