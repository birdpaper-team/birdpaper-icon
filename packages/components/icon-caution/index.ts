import type { App } from 'vue';
import _IconCaution from './icon-caution.vue';

const IconCaution = Object.assign(_IconCaution, {
  install: (app: App) => {
    app.component(_IconCaution.name, _IconCaution);
  }
});

export default IconCaution;