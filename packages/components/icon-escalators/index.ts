import type { App } from 'vue';
import _IconEscalators from './icon-escalators.vue';

const IconEscalators = Object.assign(_IconEscalators, {
  install: (app: App) => {
    app.component(_IconEscalators.name, _IconEscalators);
  }
});

export default IconEscalators;