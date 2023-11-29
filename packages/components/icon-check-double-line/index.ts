import type { App } from 'vue';
import _IconCheckDoubleLine from './icon-check-double-line.vue';

const IconCheckDoubleLine = Object.assign(_IconCheckDoubleLine, {
  install: (app: App) => {
    app.component(_IconCheckDoubleLine.name, _IconCheckDoubleLine);
  }
});

export default IconCheckDoubleLine;