const data = {
    videos: [
        {
            title: 'Simplicity is Vuetiful',
            id: '6HRPbh5fCVA',
            comment: 'Vue 짱짱~~',
            like: 252
        },
        {
            title: 'Responsive Web Design: Beyond Media Queries',
            id: 'Wb5xDcUNq48',
            comment: '반응형 웹 디자인에 관한 동영상',
            like: 25
        },
        {
            title: 'THIS IS NATIVESCRIPT!',
            id: 'VypbgNAsqos',
            comment: 'NativeScript에 관한 발표',
            like: 2
        },
    ]
};

let app = new Vue({
    el: '#app',
    data,
    methods: {
        getURL(id) {
            return `https://www.youtube-nocookie.com/embed/${id}?amp;showinfo=0`;
        },
        like(v) {
            v.like++;
        }
    }
});