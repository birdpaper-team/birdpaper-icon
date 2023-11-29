import type { App } from 'vue';
import _IconEndpointSquare from './icon-endpoint-square.vue';

const IconEndpointSquare = Object.assign(_IconEndpointSquare, {
  install: (app: App) => {
    app.component(_IconEndpointSquare.name, _IconEndpointSquare);
  }
});

export default IconEndpointSquare;