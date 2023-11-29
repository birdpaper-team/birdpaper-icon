import type { App } from 'vue';
import _IconDisplay from './icon-display.vue';

const IconDisplay = Object.assign(_IconDisplay, {
  install: (app: App) => {
    app.component(_IconDisplay.name, _IconDisplay);
  }
});

export default IconDisplay;