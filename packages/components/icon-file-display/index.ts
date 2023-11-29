import type { App } from 'vue';
import _IconFileDisplay from './icon-file-display.vue';

const IconFileDisplay = Object.assign(_IconFileDisplay, {
  install: (app: App) => {
    app.component(_IconFileDisplay.name, _IconFileDisplay);
  }
});

export default IconFileDisplay;