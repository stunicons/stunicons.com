import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ isDev, app }) => {
    // if (!isDev){
        Vue.use(VueGtag, {
            config: { id: 'G-8CLF8SW16Q' },
            appName: 'stunicons.com',
            pageTrackerScreenviewEnabled: true

        },
        app.router);
    // } else {
    //     console.log("Skipping GA in development")
    // }
}