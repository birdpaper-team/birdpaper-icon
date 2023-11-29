import type { App } from 'vue';
import _IconCreativeCommonsNdFill from './icon-creative-commons-nd-fill.vue';

const IconCreativeCommonsNdFill = Object.assign(_IconCreativeCommonsNdFill, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsNdFill.name, _IconCreativeCommonsNdFill);
  }
});

export default IconCreativeCommonsNdFill;