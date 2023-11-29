import type { App } from 'vue';
import _IconMacadamiaNut from './icon-macadamia-nut.vue';

const IconMacadamiaNut = Object.assign(_IconMacadamiaNut, {
  install: (app: App) => {
    app.component(_IconMacadamiaNut.name, _IconMacadamiaNut);
  }
});

export default IconMacadamiaNut;