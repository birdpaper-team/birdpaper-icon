import type { App } from 'vue';
import _IconPlayLargeFill from './icon-play-large-fill.vue';

const IconPlayLargeFill = Object.assign(_IconPlayLargeFill, {
  install: (app: App) => {
    app.component(_IconPlayLargeFill.name, _IconPlayLargeFill);
  }
});

export default IconPlayLargeFill;