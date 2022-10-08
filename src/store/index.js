import { createStore } from 'vuex'

const store = createStore({
	state: {
		message: {
			show: false,
			text: '',
			type: '',
		},
	},
	getters: {
		getMessage: state => state.message,
	},
	mutations: {
		setMessage(state, payload) {
			state.message = payload;
		}
	},
})
export default store