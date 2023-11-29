import type { App } from 'vue';
import _IconToggleLine from './icon-toggle-line.vue';

const IconToggleLine = Object.assign(_IconToggleLine, {
  install: (app: App) => {
    app.component(_IconToggleLine.name, _IconToggleLine);
  }
});

export default IconToggleLine;