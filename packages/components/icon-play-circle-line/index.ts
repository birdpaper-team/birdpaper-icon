import type { App } from 'vue';
import _IconPlayCircleLine from './icon-play-circle-line.vue';

const IconPlayCircleLine = Object.assign(_IconPlayCircleLine, {
  install: (app: App) => {
    app.component(_IconPlayCircleLine.name, _IconPlayCircleLine);
  }
});

export default IconPlayCircleLine;