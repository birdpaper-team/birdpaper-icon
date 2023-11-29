import type { App } from 'vue';
import _IconConvergingGateway from './icon-converging-gateway.vue';

const IconConvergingGateway = Object.assign(_IconConvergingGateway, {
  install: (app: App) => {
    app.component(_IconConvergingGateway.name, _IconConvergingGateway);
  }
});

export default IconConvergingGateway;