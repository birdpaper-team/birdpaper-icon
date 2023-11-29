import type { App } from 'vue';
import _IconDataDisplay from './icon-data-display.vue';

const IconDataDisplay = Object.assign(_IconDataDisplay, {
  install: (app: App) => {
    app.component(_IconDataDisplay.name, _IconDataDisplay);
  }
});

export default IconDataDisplay;