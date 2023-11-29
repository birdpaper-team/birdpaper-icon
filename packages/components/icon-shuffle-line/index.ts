import type { App } from 'vue';
import _IconShuffleLine from './icon-shuffle-line.vue';

const IconShuffleLine = Object.assign(_IconShuffleLine, {
  install: (app: App) => {
    app.component(_IconShuffleLine.name, _IconShuffleLine);
  }
});

export default IconShuffleLine;