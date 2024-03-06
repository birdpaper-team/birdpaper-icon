import type { App } from 'vue';
import _IconPlayReverseLargeLine from './icon-play-reverse-large-line.vue';

const IconPlayReverseLargeLine = Object.assign(_IconPlayReverseLargeLine, {
  install: (app: App) => {
    app.component(_IconPlayReverseLargeLine.name, _IconPlayReverseLargeLine);
  }
});

export default IconPlayReverseLargeLine;