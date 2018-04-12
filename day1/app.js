let app = new Vue({
	el: '#vue-root',
	computed: {
		rand() {
			return Math.floor(100 * Math.random());
		}
	}
});