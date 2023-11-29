import type { App } from 'vue';
import _IconPeopleUpload from './icon-people-upload.vue';

const IconPeopleUpload = Object.assign(_IconPeopleUpload, {
  install: (app: App) => {
    app.component(_IconPeopleUpload.name, _IconPeopleUpload);
  }
});

export default IconPeopleUpload;