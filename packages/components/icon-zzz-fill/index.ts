import type { App } from 'vue';
import _IconZzzFill from './icon-zzz-fill.vue';

const IconZzzFill = Object.assign(_IconZzzFill, {
  install: (app: App) => {
    app.component(_IconZzzFill.name, _IconZzzFill);
  }
});

export default IconZzzFill;