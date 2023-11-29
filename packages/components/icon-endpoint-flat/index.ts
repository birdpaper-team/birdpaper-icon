import type { App } from 'vue';
import _IconEndpointFlat from './icon-endpoint-flat.vue';

const IconEndpointFlat = Object.assign(_IconEndpointFlat, {
  install: (app: App) => {
    app.component(_IconEndpointFlat.name, _IconEndpointFlat);
  }
});

export default IconEndpointFlat;