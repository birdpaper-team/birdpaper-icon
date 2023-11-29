import type { App } from 'vue';
import _IconCreativeCommonsByFill from './icon-creative-commons-by-fill.vue';

const IconCreativeCommonsByFill = Object.assign(_IconCreativeCommonsByFill, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsByFill.name, _IconCreativeCommonsByFill);
  }
});

export default IconCreativeCommonsByFill;