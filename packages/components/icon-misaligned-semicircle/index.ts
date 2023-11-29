import type { App } from 'vue';
import _IconMisalignedSemicircle from './icon-misaligned-semicircle.vue';

const IconMisalignedSemicircle = Object.assign(_IconMisalignedSemicircle, {
  install: (app: App) => {
    app.component(_IconMisalignedSemicircle.name, _IconMisalignedSemicircle);
  }
});

export default IconMisalignedSemicircle;