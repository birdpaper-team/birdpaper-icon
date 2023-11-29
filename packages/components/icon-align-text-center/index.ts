import type { App } from 'vue';
import _IconAlignTextCenter from './icon-align-text-center.vue';

const IconAlignTextCenter = Object.assign(_IconAlignTextCenter, {
  install: (app: App) => {
    app.component(_IconAlignTextCenter.name, _IconAlignTextCenter);
  }
});

export default IconAlignTextCenter;