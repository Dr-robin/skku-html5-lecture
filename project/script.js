const data = {
    yturl: '', ytcomment: '',
    videos: [
        {
            title: 'Simplicity is Vuetiful',
            id: '6HRPbh5fCVA',
            comment: 'Vue 짱짱~~',
            like: 0
        },
        {
            title: 'Responsive Web Design: Beyond Media Queries',
            id: 'Wb5xDcUNq48',
            comment: '반응형 웹 디자인에 관한 동영상',
            like: 0
        },
        {
            title: 'THIS IS NATIVESCRIPT!',
            id: 'VypbgNAsqos',
            comment: 'NativeScript에 관한 발표',
            like: 0
        },
    ]
};

gapi.load('client', () => {
    gapi.client.init({apiKey: 'AIzaSyDZ8AAI3ZWA3EPAFlw9hwV4IGoDEKKMb7Y'}).then(() => {
        return gapi.client.request({path: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + '7lCDEYXw3mM'});
    }).then((res) => {
        console.log(res.result.items[0].snippet.title);
    });
});

let app = new Vue({
    el: '#app',
    data,
    methods: {
        getURL(id) {
            return `https://www.youtube-nocookie.com/embed/${id}?amp;showinfo=0`;
        },
        like(v) {
            v.like++;
        },
        addYT() {
            let id = app.yturl.match(/^https:\/\/www\.youtube\.com\/watch\?v=(\w+)$/);
            if(id.length) {
                id = id[1];
            }
            gapi.client.request({path: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id}).then((res) => {
                app.videos.unshift({title: res.result.items[0].snippet.title, id, comment: app.ytcomment, like: 0});
                app.yturl = '';
                app.ytcomment = '';
            });
        }
    },
    computed: {
        sortedVideos() {
            return this.videos.sort((a, b) => {
                return b.like - a.like;
            })
        }
    }
});