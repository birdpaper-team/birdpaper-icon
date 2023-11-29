import type { App } from 'vue';
import _IconHippo from './icon-hippo.vue';

const IconHippo = Object.assign(_IconHippo, {
  install: (app: App) => {
    app.component(_IconHippo.name, _IconHippo);
  }
});

export default IconHippo;