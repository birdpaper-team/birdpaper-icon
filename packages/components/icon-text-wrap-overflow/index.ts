import type { App } from 'vue';
import _IconTextWrapOverflow from './icon-text-wrap-overflow.vue';

const IconTextWrapOverflow = Object.assign(_IconTextWrapOverflow, {
  install: (app: App) => {
    app.component(_IconTextWrapOverflow.name, _IconTextWrapOverflow);
  }
});

export default IconTextWrapOverflow;