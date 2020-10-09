import Vue from 'vue';
import axios, { AxiosPromise } from 'axios';
import VueAxios from 'vue-axios';

export const ApiService = {
  init(): void {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  },

  setAuthHeader(token: string): void {
    Vue.axios.defaults.headers.common.Authorization = `BEARER ${token}`;
  },

  get(resource: string): AxiosPromise {
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource: string, params = {}): AxiosPromise {
    return Vue.axios.post(resource, params);
  },

  patch(resource: string, params = {}): AxiosPromise {
    return Vue.axios.patch(resource, params);
  },

  put(resource: string, params = {}): AxiosPromise {
    return Vue.axios.put(resource, params);
  },

  delete(resource: string): AxiosPromise {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};
