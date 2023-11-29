import type { App } from 'vue';
import _IconFloodFill from './icon-flood-fill.vue';

const IconFloodFill = Object.assign(_IconFloodFill, {
  install: (app: App) => {
    app.component(_IconFloodFill.name, _IconFloodFill);
  }
});

export default IconFloodFill;