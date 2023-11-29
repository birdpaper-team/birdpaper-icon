import type { App } from 'vue';
import _IconPercentFill from './icon-percent-fill.vue';

const IconPercentFill = Object.assign(_IconPercentFill, {
  install: (app: App) => {
    app.component(_IconPercentFill.name, _IconPercentFill);
  }
});

export default IconPercentFill;