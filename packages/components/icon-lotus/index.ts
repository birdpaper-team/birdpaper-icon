import type { App } from 'vue';
import _IconLotus from './icon-lotus.vue';

const IconLotus = Object.assign(_IconLotus, {
  install: (app: App) => {
    app.component(_IconLotus.name, _IconLotus);
  }
});

export default IconLotus;