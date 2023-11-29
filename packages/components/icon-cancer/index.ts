import type { App } from 'vue';
import _IconCancer from './icon-cancer.vue';

const IconCancer = Object.assign(_IconCancer, {
  install: (app: App) => {
    app.component(_IconCancer.name, _IconCancer);
  }
});

export default IconCancer;