import type { App } from 'vue';
import _IconCalendarCloseFill from './icon-calendar-close-fill.vue';

const IconCalendarCloseFill = Object.assign(_IconCalendarCloseFill, {
  install: (app: App) => {
    app.component(_IconCalendarCloseFill.name, _IconCalendarCloseFill);
  }
});

export default IconCalendarCloseFill;