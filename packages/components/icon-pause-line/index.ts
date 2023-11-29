import type { App } from 'vue';
import _IconPauseLine from './icon-pause-line.vue';

const IconPauseLine = Object.assign(_IconPauseLine, {
  install: (app: App) => {
    app.component(_IconPauseLine.name, _IconPauseLine);
  }
});

export default IconPauseLine;