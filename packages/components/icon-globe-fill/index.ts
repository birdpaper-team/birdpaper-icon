import type { App } from 'vue';
import _IconGlobeFill from './icon-globe-fill.vue';

const IconGlobeFill = Object.assign(_IconGlobeFill, {
  install: (app: App) => {
    app.component(_IconGlobeFill.name, _IconGlobeFill);
  }
});

export default IconGlobeFill;