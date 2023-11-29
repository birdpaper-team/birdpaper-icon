import type { App } from 'vue';
import _IconGradienterFill from './icon-gradienter-fill.vue';

const IconGradienterFill = Object.assign(_IconGradienterFill, {
  install: (app: App) => {
    app.component(_IconGradienterFill.name, _IconGradienterFill);
  }
});

export default IconGradienterFill;