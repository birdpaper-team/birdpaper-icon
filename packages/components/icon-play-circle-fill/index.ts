import type { App } from 'vue';
import _IconPlayCircleFill from './icon-play-circle-fill.vue';

const IconPlayCircleFill = Object.assign(_IconPlayCircleFill, {
  install: (app: App) => {
    app.component(_IconPlayCircleFill.name, _IconPlayCircleFill);
  }
});

export default IconPlayCircleFill;