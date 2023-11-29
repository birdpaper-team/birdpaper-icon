import type { App } from 'vue';
import _IconOnlineMeeting from './icon-online-meeting.vue';

const IconOnlineMeeting = Object.assign(_IconOnlineMeeting, {
  install: (app: App) => {
    app.component(_IconOnlineMeeting.name, _IconOnlineMeeting);
  }
});

export default IconOnlineMeeting;