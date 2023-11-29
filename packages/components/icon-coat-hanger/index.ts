import type { App } from 'vue';
import _IconCoatHanger from './icon-coat-hanger.vue';

const IconCoatHanger = Object.assign(_IconCoatHanger, {
  install: (app: App) => {
    app.component(_IconCoatHanger.name, _IconCoatHanger);
  }
});

export default IconCoatHanger;