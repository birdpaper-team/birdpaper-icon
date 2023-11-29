import type { App } from 'vue';
import _IconStethoscopeLine from './icon-stethoscope-line.vue';

const IconStethoscopeLine = Object.assign(_IconStethoscopeLine, {
  install: (app: App) => {
    app.component(_IconStethoscopeLine.name, _IconStethoscopeLine);
  }
});

export default IconStethoscopeLine;