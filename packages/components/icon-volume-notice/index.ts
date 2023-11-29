import type { App } from 'vue';
import _IconVolumeNotice from './icon-volume-notice.vue';

const IconVolumeNotice = Object.assign(_IconVolumeNotice, {
  install: (app: App) => {
    app.component(_IconVolumeNotice.name, _IconVolumeNotice);
  }
});

export default IconVolumeNotice;