import type { App } from 'vue';
import _IconRecyclingPool from './icon-recycling-pool.vue';

const IconRecyclingPool = Object.assign(_IconRecyclingPool, {
  install: (app: App) => {
    app.component(_IconRecyclingPool.name, _IconRecyclingPool);
  }
});

export default IconRecyclingPool;