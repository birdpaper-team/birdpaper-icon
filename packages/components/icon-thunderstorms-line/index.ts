import type { App } from 'vue';
import _IconThunderstormsLine from './icon-thunderstorms-line.vue';

const IconThunderstormsLine = Object.assign(_IconThunderstormsLine, {
  install: (app: App) => {
    app.component(_IconThunderstormsLine.name, _IconThunderstormsLine);
  }
});

export default IconThunderstormsLine;