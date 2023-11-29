import type { App } from 'vue';
import _IconParallelGateway from './icon-parallel-gateway.vue';

const IconParallelGateway = Object.assign(_IconParallelGateway, {
  install: (app: App) => {
    app.component(_IconParallelGateway.name, _IconParallelGateway);
  }
});

export default IconParallelGateway;