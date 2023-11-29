import type { App } from 'vue';
import _IconDislikeLine from './icon-dislike-line.vue';

const IconDislikeLine = Object.assign(_IconDislikeLine, {
  install: (app: App) => {
    app.component(_IconDislikeLine.name, _IconDislikeLine);
  }
});

export default IconDislikeLine;