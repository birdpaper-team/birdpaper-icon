import type { App } from 'vue';
import _IconSwimmingPool from './icon-swimming-pool.vue';

const IconSwimmingPool = Object.assign(_IconSwimmingPool, {
  install: (app: App) => {
    app.component(_IconSwimmingPool.name, _IconSwimmingPool);
  }
});

export default IconSwimmingPool;