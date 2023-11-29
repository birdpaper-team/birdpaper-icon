import type { App } from 'vue';
import _IconTentFill from './icon-tent-fill.vue';

const IconTentFill = Object.assign(_IconTentFill, {
  install: (app: App) => {
    app.component(_IconTentFill.name, _IconTentFill);
  }
});

export default IconTentFill;