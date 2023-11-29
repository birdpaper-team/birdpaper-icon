import type { App } from 'vue';
import _IconTerrace from './icon-terrace.vue';

const IconTerrace = Object.assign(_IconTerrace, {
  install: (app: App) => {
    app.component(_IconTerrace.name, _IconTerrace);
  }
});

export default IconTerrace;