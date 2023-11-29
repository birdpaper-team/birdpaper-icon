import type { App } from 'vue';
import _IconLinkCloudFaild from './icon-link-cloud-faild.vue';

const IconLinkCloudFaild = Object.assign(_IconLinkCloudFaild, {
  install: (app: App) => {
    app.component(_IconLinkCloudFaild.name, _IconLinkCloudFaild);
  }
});

export default IconLinkCloudFaild;