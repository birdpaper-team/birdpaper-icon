import type { App } from 'vue';
import _IconVacation from './icon-vacation.vue';

const IconVacation = Object.assign(_IconVacation, {
  install: (app: App) => {
    app.component(_IconVacation.name, _IconVacation);
  }
});

export default IconVacation;