import type { App } from 'vue';
import _IconParallelogram from './icon-parallelogram.vue';

const IconParallelogram = Object.assign(_IconParallelogram, {
  install: (app: App) => {
    app.component(_IconParallelogram.name, _IconParallelogram);
  }
});

export default IconParallelogram;