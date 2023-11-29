import type { App } from 'vue';
import _IconReduce from './icon-reduce.vue';

const IconReduce = Object.assign(_IconReduce, {
  install: (app: App) => {
    app.component(_IconReduce.name, _IconReduce);
  }
});

export default IconReduce;