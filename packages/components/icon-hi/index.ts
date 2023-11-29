import type { App } from 'vue';
import _IconHi from './icon-hi.vue';

const IconHi = Object.assign(_IconHi, {
  install: (app: App) => {
    app.component(_IconHi.name, _IconHi);
  }
});

export default IconHi;