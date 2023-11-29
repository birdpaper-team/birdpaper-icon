import type { App } from 'vue';
import _IconEcg from './icon-ecg.vue';

const IconEcg = Object.assign(_IconEcg, {
  install: (app: App) => {
    app.component(_IconEcg.name, _IconEcg);
  }
});

export default IconEcg;