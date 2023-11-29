import type { App } from 'vue';
import _IconSpyFill from './icon-spy-fill.vue';

const IconSpyFill = Object.assign(_IconSpyFill, {
  install: (app: App) => {
    app.component(_IconSpyFill.name, _IconSpyFill);
  }
});

export default IconSpyFill;