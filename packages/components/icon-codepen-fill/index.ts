import type { App } from 'vue';
import _IconCodepenFill from './icon-codepen-fill.vue';

const IconCodepenFill = Object.assign(_IconCodepenFill, {
  install: (app: App) => {
    app.component(_IconCodepenFill.name, _IconCodepenFill);
  }
});

export default IconCodepenFill;