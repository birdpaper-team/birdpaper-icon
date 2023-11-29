import type { App } from 'vue';
import _IconCreativeCommonsNcFill from './icon-creative-commons-nc-fill.vue';

const IconCreativeCommonsNcFill = Object.assign(_IconCreativeCommonsNcFill, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsNcFill.name, _IconCreativeCommonsNcFill);
  }
});

export default IconCreativeCommonsNcFill;