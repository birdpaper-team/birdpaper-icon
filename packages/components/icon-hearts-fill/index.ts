import type { App } from 'vue';
import _IconHeartsFill from './icon-hearts-fill.vue';

const IconHeartsFill = Object.assign(_IconHeartsFill, {
  install: (app: App) => {
    app.component(_IconHeartsFill.name, _IconHeartsFill);
  }
});

export default IconHeartsFill;