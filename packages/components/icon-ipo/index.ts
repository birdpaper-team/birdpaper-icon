import type { App } from 'vue';
import _IconIpo from './icon-ipo.vue';

const IconIpo = Object.assign(_IconIpo, {
  install: (app: App) => {
    app.component(_IconIpo.name, _IconIpo);
  }
});

export default IconIpo;