import type { App } from 'vue';
import _IconEndpointDisplacement from './icon-endpoint-displacement.vue';

const IconEndpointDisplacement = Object.assign(_IconEndpointDisplacement, {
  install: (app: App) => {
    app.component(_IconEndpointDisplacement.name, _IconEndpointDisplacement);
  }
});

export default IconEndpointDisplacement;