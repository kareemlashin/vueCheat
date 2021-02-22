import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {}
    })
    /*
    import Vue from 'vue';
    import Vuex from 'vuex';
    //import axios from 'axios';
    Vue.use(Vuex);

    export default new Vuex.Store({
      state: {
        allData: [],
        errGet: [],
        OneItem: null
      },
      getters: {
        all: (state) => {
          return state.allData;
        },
      },
      mutations: {
        set(state, payload) {
          let newARR = payload;
          newARR.forEach((element) => {
            state.allData.push(element);
          });
        },
        setERR(state, payload) {
          state.errGet = payload;
        },

        addNewUser: (state, user) => state.allData.push(user),
        removeUser: (state, id) => {
          let index = state.allData.findIndex(x => x.id == id)
          state.allData.splice(index, 1)
        },
        update: (state, data) => {
          let index = state.allData.findIndex(x => x.id == data.id);
          state.allData.splice(index, 1, data);
        }
      },
      actions: {
        fetchUsers({
          commit
        }) {
          axios
            .get(`https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo`)
            .then((res) => {
              commit('set', res.data);

            })
            .catch((err) => {
              commit('setERR', err);
            });
        },

        addUsers({
          commit
        }, {
          title: title,
          userId: userId
        }) {
          axios
            .post('https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo', {
              id: '',
              title: title,
              userId: userId
            })
            .then((response) => {
              commit('addNewUser', response.data);
            });
        },

        deleteUser({
          commit
        }, id) {
          axios
            .delete(`https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo/${id}`)
            .then((response) => {

              commit('removeUser', id);
            });
        },
        save({
          commit
        }, data) {
          let id = data.id;
          let obj = {
            userId: data.userId,
            title: data.title
          }
          axios
            .put(`https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo/${id}`, obj)
            .then((response) => {
              commit('update', response.data);
            });
        },

      },

    });*/