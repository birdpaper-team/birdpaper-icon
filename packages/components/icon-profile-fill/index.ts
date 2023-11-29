import type { App } from 'vue';
import _IconProfileFill from './icon-profile-fill.vue';

const IconProfileFill = Object.assign(_IconProfileFill, {
  install: (app: App) => {
    app.component(_IconProfileFill.name, _IconProfileFill);
  }
});

export default IconProfileFill;