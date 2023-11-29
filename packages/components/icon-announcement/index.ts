import type { App } from 'vue';
import _IconAnnouncement from './icon-announcement.vue';

const IconAnnouncement = Object.assign(_IconAnnouncement, {
  install: (app: App) => {
    app.component(_IconAnnouncement.name, _IconAnnouncement);
  }
});

export default IconAnnouncement;