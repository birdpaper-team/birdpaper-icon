import type { App } from 'vue';
import _IconPlayReverseLine from './icon-play-reverse-line.vue';

const IconPlayReverseLine = Object.assign(_IconPlayReverseLine, {
  install: (app: App) => {
    app.component(_IconPlayReverseLine.name, _IconPlayReverseLine);
  }
});

export default IconPlayReverseLine;