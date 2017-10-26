import Vue from 'vue'

export function setStoryType (state, { storiestype }) {
  state.storiestype = storiestype
}

export function setListItems (state, { type, listItems }) {
  state.items[type] = listItems
}

export function setUser (state, { user }) {
  Vue.set(state, 'user', user)
}

export function setCurrentItem (state, { item }) {
  Vue.set(state, 'currentItem', item)
}

export function setListStart (state, { page }) {
  Vue.set(state, 'listStart', ((page - 1) * 30) + 1)
}
