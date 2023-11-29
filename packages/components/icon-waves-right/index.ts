import type { App } from 'vue';
import _IconWavesRight from './icon-waves-right.vue';

const IconWavesRight = Object.assign(_IconWavesRight, {
  install: (app: App) => {
    app.component(_IconWavesRight.name, _IconWavesRight);
  }
});

export default IconWavesRight;