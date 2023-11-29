import type { App } from 'vue';
import _IconInclusiveGateway from './icon-inclusive-gateway.vue';

const IconInclusiveGateway = Object.assign(_IconInclusiveGateway, {
  install: (app: App) => {
    app.component(_IconInclusiveGateway.name, _IconInclusiveGateway);
  }
});

export default IconInclusiveGateway;