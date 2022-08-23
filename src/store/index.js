import {
    createStore
} from 'vuex'
import axios from 'axios'

axios.defaults.headers = {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
}
axios.defaults.baseURL = 'https://demoyoursite.net/minesy/kurash/public/api/';

export default createStore({
    state: {
        contactData: [],
        settingsData: [],
        serviceData: [],
        blogData: [],
        homeData: [],
        aboutData: [],
        locale: window.location.pathname.replace(/^\/([^/]+).*/i, "$1"),
        // loading: true,
        contactErrorsApi: null,
    },
    mutations: {
        setSettingsData: (state, settingsData) => (state.settingsData = settingsData),
        setContactData: (state, contactData) => (state.contactData = contactData),
        setHomeData: (state, homeData) => (state.homeData = homeData),
        setAboutData: (state, aboutData) => (state.aboutData = aboutData),
        setServiceData: (state, serviceData) => (state.serviceData = serviceData),
        setBlogData: (state, blogData) => (state.blogData = blogData),
    },
    actions: {
        async getSettingsData({
            commit
        }) {
            await axios
                .get("settings", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    commit("setSettingsData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async getHomeData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("home", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setHomeData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async getServiceData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("service", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setServiceData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async getContactData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("service", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setContactData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async getBlogData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("blogs", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setBlogData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async getAboutData({
            commit
        }) {
            this.state.loading = true;
            await axios
                .get("about", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale
                    },
                })
                .then((response) => {
                    this.state.loading = false;
                    commit("setAboutData", response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async storeFormData({}, contactFormData) {
            await axios
                .post("contact", contactFormData, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": this.state.locale,
                    },
                })
                .then(() => {
                    this.state.contactErrorsApi = null
                })
                .catch((error) => {
                    this.state.contactErrorsApi = error.response;
                });
        },


    },
    modules: {}
})