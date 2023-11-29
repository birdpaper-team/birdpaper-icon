import type { App } from 'vue';
import _IconServiceFill from './icon-service-fill.vue';

const IconServiceFill = Object.assign(_IconServiceFill, {
  install: (app: App) => {
    app.component(_IconServiceFill.name, _IconServiceFill);
  }
});

export default IconServiceFill;