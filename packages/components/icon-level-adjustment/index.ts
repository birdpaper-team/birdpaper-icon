import type { App } from 'vue';
import _IconLevelAdjustment from './icon-level-adjustment.vue';

const IconLevelAdjustment = Object.assign(_IconLevelAdjustment, {
  install: (app: App) => {
    app.component(_IconLevelAdjustment.name, _IconLevelAdjustment);
  }
});

export default IconLevelAdjustment;