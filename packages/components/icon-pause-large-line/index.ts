import type { App } from 'vue';
import _IconPauseLargeLine from './icon-pause-large-line.vue';

const IconPauseLargeLine = Object.assign(_IconPauseLargeLine, {
  install: (app: App) => {
    app.component(_IconPauseLargeLine.name, _IconPauseLargeLine);
  }
});

export default IconPauseLargeLine;