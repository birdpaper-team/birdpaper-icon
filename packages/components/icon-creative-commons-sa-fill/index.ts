import type { App } from 'vue';
import _IconCreativeCommonsSaFill from './icon-creative-commons-sa-fill.vue';

const IconCreativeCommonsSaFill = Object.assign(_IconCreativeCommonsSaFill, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsSaFill.name, _IconCreativeCommonsSaFill);
  }
});

export default IconCreativeCommonsSaFill;