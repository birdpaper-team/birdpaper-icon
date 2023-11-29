import type { App } from 'vue';
import _IconCreativeCommonsZeroFill from './icon-creative-commons-zero-fill.vue';

const IconCreativeCommonsZeroFill = Object.assign(_IconCreativeCommonsZeroFill, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsZeroFill.name, _IconCreativeCommonsZeroFill);
  }
});

export default IconCreativeCommonsZeroFill;