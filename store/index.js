export const state = () => ({
  count: 0,
  uploadedJobDescriptionDocument: null,
});

export const mutations = {
  storeCount(state, count) {
    state.count = count;
  },
  storeUploadedJobDescriptionDocument(state, file) {
    state.uploadedJobDescriptionDocument = file;
  },
};

export const actions = {
  saveCount({ commit }, count) {
    commit("storeCount", count);
  },
  saveUploadedJobDescriptionDocument({ commit }, file) {
    commit("storeUploadedJobDescriptionDocument", file);
  },
};

export const getters = {
  getCount(state) {
    return state.count;
  },
  getUploadedJobDescriptionDocument(state) {
    return state.uploadedJobDescriptionDocument;
  },
};