import type { App } from 'vue';
import _IconPlayLargeLine from './icon-play-large-line.vue';

const IconPlayLargeLine = Object.assign(_IconPlayLargeLine, {
  install: (app: App) => {
    app.component(_IconPlayLargeLine.name, _IconPlayLargeLine);
  }
});

export default IconPlayLargeLine;