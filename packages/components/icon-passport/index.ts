import type { App } from 'vue';
import _IconPassport from './icon-passport.vue';

const IconPassport = Object.assign(_IconPassport, {
  install: (app: App) => {
    app.component(_IconPassport.name, _IconPassport);
  }
});

export default IconPassport;