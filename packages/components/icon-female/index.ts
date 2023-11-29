import type { App } from 'vue';
import _IconFemale from './icon-female.vue';

const IconFemale = Object.assign(_IconFemale, {
  install: (app: App) => {
    app.component(_IconFemale.name, _IconFemale);
  }
});

export default IconFemale;