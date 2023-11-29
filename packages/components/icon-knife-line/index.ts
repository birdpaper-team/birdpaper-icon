import type { App } from 'vue';
import _IconKnifeLine from './icon-knife-line.vue';

const IconKnifeLine = Object.assign(_IconKnifeLine, {
  install: (app: App) => {
    app.component(_IconKnifeLine.name, _IconKnifeLine);
  }
});

export default IconKnifeLine;