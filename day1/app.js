let app = new Vue({
	el: '#vue-root',
	computed: {
		rand() {
			return Math.round(100 * Math.random());
		}
	}
});
alert('이미 로딩됨???'); // alert는 동기적이기 때문에 스크립트 실행을 방해함
