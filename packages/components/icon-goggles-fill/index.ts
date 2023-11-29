import type { App } from 'vue';
import _IconGogglesFill from './icon-goggles-fill.vue';

const IconGogglesFill = Object.assign(_IconGogglesFill, {
  install: (app: App) => {
    app.component(_IconGogglesFill.name, _IconGogglesFill);
  }
});

export default IconGogglesFill;