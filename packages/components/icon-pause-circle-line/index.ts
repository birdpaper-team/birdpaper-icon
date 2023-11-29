import type { App } from 'vue';
import _IconPauseCircleLine from './icon-pause-circle-line.vue';

const IconPauseCircleLine = Object.assign(_IconPauseCircleLine, {
  install: (app: App) => {
    app.component(_IconPauseCircleLine.name, _IconPauseCircleLine);
  }
});

export default IconPauseCircleLine;