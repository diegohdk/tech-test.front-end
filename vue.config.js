module.exports = {
    lintOnSave : false,
    chainWebpack : config => {
        const rule = config.module.rule('scss');

        rule.uses.clear();

        rule
            .use('sass-loader')
                .loader('sass-loader')
                .loader('css-loader')
                .loader('vue-style-loader')
            .end();

        config.plugin('html').tap(args => {
            args[0].title = 'Active Businesses Test - ae.studio';
            return args;
        });
    }
}