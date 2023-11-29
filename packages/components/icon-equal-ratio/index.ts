import type { App } from 'vue';
import _IconEqualRatio from './icon-equal-ratio.vue';

const IconEqualRatio = Object.assign(_IconEqualRatio, {
  install: (app: App) => {
    app.component(_IconEqualRatio.name, _IconEqualRatio);
  }
});

export default IconEqualRatio;