import type { App } from 'vue';
import _IconHanger from './icon-hanger.vue';

const IconHanger = Object.assign(_IconHanger, {
  install: (app: App) => {
    app.component(_IconHanger.name, _IconHanger);
  }
});

export default IconHanger;