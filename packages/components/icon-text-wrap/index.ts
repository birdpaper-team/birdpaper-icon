import type { App } from 'vue';
import _IconTextWrap from './icon-text-wrap.vue';

const IconTextWrap = Object.assign(_IconTextWrap, {
  install: (app: App) => {
    app.component(_IconTextWrap.name, _IconTextWrap);
  }
});

export default IconTextWrap;