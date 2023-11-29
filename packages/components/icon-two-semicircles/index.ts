import type { App } from 'vue';
import _IconTwoSemicircles from './icon-two-semicircles.vue';

const IconTwoSemicircles = Object.assign(_IconTwoSemicircles, {
  install: (app: App) => {
    app.component(_IconTwoSemicircles.name, _IconTwoSemicircles);
  }
});

export default IconTwoSemicircles;