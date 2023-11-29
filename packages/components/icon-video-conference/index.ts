import type { App } from 'vue';
import _IconVideoConference from './icon-video-conference.vue';

const IconVideoConference = Object.assign(_IconVideoConference, {
  install: (app: App) => {
    app.component(_IconVideoConference.name, _IconVideoConference);
  }
});

export default IconVideoConference;