import type { App } from "vue";

export const installer = (components: any[] = []) => {
  const install = (app: App) => {
    components.forEach((c: any) => {
      app.use(c);
    });
  };

  return {
    version: "1.0.0",
    install,
  };
};
