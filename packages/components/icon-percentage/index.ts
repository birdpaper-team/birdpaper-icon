import type { App } from 'vue';
import _IconPercentage from './icon-percentage.vue';

const IconPercentage = Object.assign(_IconPercentage, {
  install: (app: App) => {
    app.component(_IconPercentage.name, _IconPercentage);
  }
});

export default IconPercentage;