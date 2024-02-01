import type { App } from 'vue';
import _IconRewindStartMiniFill from './icon-rewind-start-mini-fill.vue';

const IconRewindStartMiniFill = Object.assign(_IconRewindStartMiniFill, {
  install: (app: App) => {
    app.component(_IconRewindStartMiniFill.name, _IconRewindStartMiniFill);
  }
});

export default IconRewindStartMiniFill;