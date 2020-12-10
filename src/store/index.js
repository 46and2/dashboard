import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: uuidv4(),
        title: 'Hello!',
        content: "Sup, what's going on?",
        list: 1
      },
      {
        id: uuidv4(),
        title: 'To do...',
        content: 'Done',
        list: 2
      }
    ],
    lists: [
      { id: 1, theme: 'is-primary' },
      { id: 2, theme: 'is-info' },
      { id: 3, theme: 'is-warning' },
      { id: 4, theme: 'is-danger' }
    ],
    dragAndDrop: true
  },
  mutations: {
    ADD_CARD(state, newCard) {
      state.cards.push(newCard);
    },
    CHANGE_CARD_LIST(state, { cardID, newListID }) {
      let cardToEdit = state.cards.find(card => card.id === cardID);
      cardToEdit && (cardToEdit.list = newListID);
    },
    SET_DRAG_AND_DROP_ENABLED(state, enabled) {
      state.dragAndDrop = enabled;
    },
    INITIALISE_STORE(state) {
      let persistedState = localStorage.getItem('dashboardData');
      if (persistedState) {
        this.replaceState(Object.assign(state, JSON.parse(persistedState)));
      }
    }
  },
  actions: {
    createNewCard({ commit }, payload) {
      commit('ADD_CARD', payload);
    },
    moveToList({ commit }, payload) {
      commit('CHANGE_CARD_LIST', payload);
    },
    toggleDragAndDrop({ commit }, enabled) {
      commit('SET_DRAG_AND_DROP_ENABLED', enabled);
    }
  },
  getters: {
    cardsByLists: state =>
      state.cards.reduce((result, card) => {
        (result[card.list] = result[card.list] || []).push(card);
        return result;
      }, {})
  }
});
