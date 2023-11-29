import type { App } from 'vue';
import _IconPeopleDownload from './icon-people-download.vue';

const IconPeopleDownload = Object.assign(_IconPeopleDownload, {
  install: (app: App) => {
    app.component(_IconPeopleDownload.name, _IconPeopleDownload);
  }
});

export default IconPeopleDownload;