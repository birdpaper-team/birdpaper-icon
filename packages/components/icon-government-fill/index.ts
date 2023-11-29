import type { App } from 'vue';
import _IconGovernmentFill from './icon-government-fill.vue';

const IconGovernmentFill = Object.assign(_IconGovernmentFill, {
  install: (app: App) => {
    app.component(_IconGovernmentFill.name, _IconGovernmentFill);
  }
});

export default IconGovernmentFill;