import type { App } from 'vue';
import _IconCalendarCloseLine from './icon-calendar-close-line.vue';

const IconCalendarCloseLine = Object.assign(_IconCalendarCloseLine, {
  install: (app: App) => {
    app.component(_IconCalendarCloseLine.name, _IconCalendarCloseLine);
  }
});

export default IconCalendarCloseLine;