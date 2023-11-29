import type { App } from 'vue';
import _IconArcDeTriomphe from './icon-arc-de-triomphe.vue';

const IconArcDeTriomphe = Object.assign(_IconArcDeTriomphe, {
  install: (app: App) => {
    app.component(_IconArcDeTriomphe.name, _IconArcDeTriomphe);
  }
});

export default IconArcDeTriomphe;