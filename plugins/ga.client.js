import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {

    Vue.use(VueGtag, {
        config: { id: process.env.GATAG_ID },
        appName: 'stunicons.com',
        pageTrackerScreenviewEnabled: true

    },
    app.router);
}