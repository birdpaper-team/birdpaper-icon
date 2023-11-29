import type { App } from 'vue';
import _IconDocDetail from './icon-doc-detail.vue';

const IconDocDetail = Object.assign(_IconDocDetail, {
  install: (app: App) => {
    app.component(_IconDocDetail.name, _IconDocDetail);
  }
});

export default IconDocDetail;