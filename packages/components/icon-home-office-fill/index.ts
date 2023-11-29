import type { App } from 'vue';
import _IconHomeOfficeFill from './icon-home-office-fill.vue';

const IconHomeOfficeFill = Object.assign(_IconHomeOfficeFill, {
  install: (app: App) => {
    app.component(_IconHomeOfficeFill.name, _IconHomeOfficeFill);
  }
});

export default IconHomeOfficeFill;