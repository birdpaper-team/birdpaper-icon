import type { App } from 'vue';
import _IconDiapersOne from './icon-diapers-one.vue';

const IconDiapersOne = Object.assign(_IconDiapersOne, {
  install: (app: App) => {
    app.component(_IconDiapersOne.name, _IconDiapersOne);
  }
});

export default IconDiapersOne;