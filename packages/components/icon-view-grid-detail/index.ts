import type { App } from 'vue';
import _IconViewGridDetail from './icon-view-grid-detail.vue';

const IconViewGridDetail = Object.assign(_IconViewGridDetail, {
  install: (app: App) => {
    app.component(_IconViewGridDetail.name, _IconViewGridDetail);
  }
});

export default IconViewGridDetail;