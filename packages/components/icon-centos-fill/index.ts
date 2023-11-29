import type { App } from 'vue';
import _IconCentosFill from './icon-centos-fill.vue';

const IconCentosFill = Object.assign(_IconCentosFill, {
  install: (app: App) => {
    app.component(_IconCentosFill.name, _IconCentosFill);
  }
});

export default IconCentosFill;