import type { App } from 'vue';
import _IconPreviewOpen from './icon-preview-open.vue';

const IconPreviewOpen = Object.assign(_IconPreviewOpen, {
  install: (app: App) => {
    app.component(_IconPreviewOpen.name, _IconPreviewOpen);
  }
});

export default IconPreviewOpen;