import Vue from 'vue';

export default {
  lists(page) {
    const req = Vue.http.get('notifications', { page });
    return req.then((response) => Promise.resolve(response.data));
  },
  show(id) {
    const req = Vue.http.get(`notifications/${id}`);
    return req.then((response) => Promise.resolve(response.data));
  },
  destroy(id) {
    const req = Vue.http.delete(`notifications/${id}`);
    return req.then((response) => Promise.resolve(response.data));
  },
  counts() {
    const req = Vue.http.get('notifications/counts');
    return req.then((response) => Promise.resolve(response.data));
  },
  markAsRead() {
    const req = Vue.http.post('notifications/mark_as_read');
    return req.then((response) => Promise.resolve(response.data));
  },
};
