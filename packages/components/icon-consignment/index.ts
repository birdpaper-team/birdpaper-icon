import type { App } from 'vue';
import _IconConsignment from './icon-consignment.vue';

const IconConsignment = Object.assign(_IconConsignment, {
  install: (app: App) => {
    app.component(_IconConsignment.name, _IconConsignment);
  }
});

export default IconConsignment;