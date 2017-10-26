import HackerNewsService from '../services/hackernews.service'

export async function retrieveStories ({ commit, state }, { storiestype, page }) {
  commit('setStoryType', { storiestype })
  const response = await HackerNewsService.fetchStories(storiestype, page ? page : state.page)
  commit('setListItems', {type: storiestype, listItems: response['data']})
  commit('setListStart', { page: page ? page : state.page })
}

export async function retrieveComments ({ commit, state } , { itemID }) {
  const response = await HackerNewsService.fetchComments(itemID)
  commit('setCurrentItem', {item: response['data']})
}

export async function retrieveUser ({ commit, state } , { userID }) {
  const response = await HackerNewsService.fetchUser(userID)
  commit('setUser', {user: response['data']})
}
