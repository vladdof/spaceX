export const addPlugins = ({ app, plugins }) => {
    for (const plugin of plugins) {
        app.use(plugin);
    }

    return app;
};
