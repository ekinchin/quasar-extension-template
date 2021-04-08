import VuePlugin, { module } from 'quasar-ui-extension-template'

export default async ({
  app, router, store, Vue,
}) => {
  const { name } = VuePlugin.Component;
  Vue.use(VuePlugin);
  store.registerModule(name, module);
  if (!store.hasModule(name)) throw new Error(`Cannot register extension ${name} store`);
};
