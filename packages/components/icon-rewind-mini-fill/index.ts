import type { App } from 'vue';
import _IconRewindMiniFill from './icon-rewind-mini-fill.vue';

const IconRewindMiniFill = Object.assign(_IconRewindMiniFill, {
  install: (app: App) => {
    app.component(_IconRewindMiniFill.name, _IconRewindMiniFill);
  }
});

export default IconRewindMiniFill;