import type { App } from 'vue';
import _IconSaveOne from './icon-save-one.vue';

const IconSaveOne = Object.assign(_IconSaveOne, {
  install: (app: App) => {
    app.component(_IconSaveOne.name, _IconSaveOne);
  }
});

export default IconSaveOne;