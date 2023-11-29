import type { App } from 'vue';
import _IconSingleBed from './icon-single-bed.vue';

const IconSingleBed = Object.assign(_IconSingleBed, {
  install: (app: App) => {
    app.component(_IconSingleBed.name, _IconSingleBed);
  }
});

export default IconSingleBed;