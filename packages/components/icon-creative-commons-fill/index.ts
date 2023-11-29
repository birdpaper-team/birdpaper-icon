import type { App } from 'vue';
import _IconCreativeCommonsFill from './icon-creative-commons-fill.vue';

const IconCreativeCommonsFill = Object.assign(_IconCreativeCommonsFill, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsFill.name, _IconCreativeCommonsFill);
  }
});

export default IconCreativeCommonsFill;