import type { App } from 'vue';
import _IconEeg from './icon-eeg.vue';

const IconEeg = Object.assign(_IconEeg, {
  install: (app: App) => {
    app.component(_IconEeg.name, _IconEeg);
  }
});

export default IconEeg;