import type { App } from 'vue';
import _IconMentalHealthFill from './icon-mental-health-fill.vue';

const IconMentalHealthFill = Object.assign(_IconMentalHealthFill, {
  install: (app: App) => {
    app.component(_IconMentalHealthFill.name, _IconMentalHealthFill);
  }
});

export default IconMentalHealthFill;