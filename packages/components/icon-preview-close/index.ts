import type { App } from 'vue';
import _IconPreviewClose from './icon-preview-close.vue';

const IconPreviewClose = Object.assign(_IconPreviewClose, {
  install: (app: App) => {
    app.component(_IconPreviewClose.name, _IconPreviewClose);
  }
});

export default IconPreviewClose;