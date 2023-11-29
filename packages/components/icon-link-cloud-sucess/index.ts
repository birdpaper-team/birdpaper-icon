import type { App } from 'vue';
import _IconLinkCloudSucess from './icon-link-cloud-sucess.vue';

const IconLinkCloudSucess = Object.assign(_IconLinkCloudSucess, {
  install: (app: App) => {
    app.component(_IconLinkCloudSucess.name, _IconLinkCloudSucess);
  }
});

export default IconLinkCloudSucess;