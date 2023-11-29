import type { App } from 'vue';
import _IconTextWrapTruncation from './icon-text-wrap-truncation.vue';

const IconTextWrapTruncation = Object.assign(_IconTextWrapTruncation, {
  install: (app: App) => {
    app.component(_IconTextWrapTruncation.name, _IconTextWrapTruncation);
  }
});

export default IconTextWrapTruncation;