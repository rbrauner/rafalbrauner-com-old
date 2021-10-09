module.exports = {
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].title = "Rafał Brauner - Backend Developer";
            return args;
        });
    }
};
