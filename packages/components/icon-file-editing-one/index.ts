import type { App } from 'vue';
import _IconFileEditingOne from './icon-file-editing-one.vue';

const IconFileEditingOne = Object.assign(_IconFileEditingOne, {
  install: (app: App) => {
    app.component(_IconFileEditingOne.name, _IconFileEditingOne);
  }
});

export default IconFileEditingOne;