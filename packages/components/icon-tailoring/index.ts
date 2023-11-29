import type { App } from 'vue';
import _IconTailoring from './icon-tailoring.vue';

const IconTailoring = Object.assign(_IconTailoring, {
  install: (app: App) => {
    app.component(_IconTailoring.name, _IconTailoring);
  }
});

export default IconTailoring;