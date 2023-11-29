import type { App } from 'vue';
import _IconSteoller from './icon-steoller.vue';

const IconSteoller = Object.assign(_IconSteoller, {
  install: (app: App) => {
    app.component(_IconSteoller.name, _IconSteoller);
  }
});

export default IconSteoller;