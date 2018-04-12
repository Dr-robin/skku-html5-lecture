let app = new Vue({
	el: '#vue-root',
	computed: {
		rand() {
			return Math.round(100 * Math.random());
		}
	}
});
