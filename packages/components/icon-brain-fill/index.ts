import type { App } from 'vue';
import _IconBrainFill from './icon-brain-fill.vue';

const IconBrainFill = Object.assign(_IconBrainFill, {
  install: (app: App) => {
    app.component(_IconBrainFill.name, _IconBrainFill);
  }
});

export default IconBrainFill;