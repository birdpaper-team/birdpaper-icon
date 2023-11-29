import type { App } from 'vue';
import _IconHomeOfficeLine from './icon-home-office-line.vue';

const IconHomeOfficeLine = Object.assign(_IconHomeOfficeLine, {
  install: (app: App) => {
    app.component(_IconHomeOfficeLine.name, _IconHomeOfficeLine);
  }
});

export default IconHomeOfficeLine;