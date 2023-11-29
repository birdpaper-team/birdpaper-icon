import type { App } from 'vue';
import _IconAbnormal from './icon-abnormal.vue';

const IconAbnormal = Object.assign(_IconAbnormal, {
  install: (app: App) => {
    app.component(_IconAbnormal.name, _IconAbnormal);
  }
});

export default IconAbnormal;