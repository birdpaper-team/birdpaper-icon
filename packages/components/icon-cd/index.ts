import type { App } from 'vue';
import _IconCd from './icon-cd.vue';

const IconCd = Object.assign(_IconCd, {
  install: (app: App) => {
    app.component(_IconCd.name, _IconCd);
  }
});

export default IconCd;