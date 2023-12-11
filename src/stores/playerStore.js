import { defineStore } from 'pinia'

export const playerStore = defineStore('player', {
    state: () => ({
        currentSong: {
            id: 168295413,
            title: "Song name",
            artist: {
                name: "Artist"
            },
            album: {
                cover: "https://placekitten.com/50/50"
            }
        },
        currentSongIndex: 0,
        queue: [{
            id: 168295413,
            title: "Song name",
            artist: {
                name: "Artist"
            },
            album: {
                cover: "https://placekitten.com/50/50"
            }
        }],
        playlists: [{
            id: 1,
            name: "Liked",
            tracks: []
        }],
    }),

    actions: {
        enqueue(song) {
            this.queue.push(song);
        },

        changeCurrentIndex(index) {
            index = index < 0 ? this.queue.length + index : index;
            this.currentSongIndex = index % this.queue.length;
            this.currentSong = this.queue[this.currentSongIndex];
        },

        getNextId() {
            if (this.playlists.length === 0) {
                return 1;
            }

            return this.playlists.at(-1).id + 1;
        },

        createPlaylist(playlist) {
            playlist['id'] = this.getNextId();
            playlist.tracks = [];
            this.playlists.push(playlist);
            return playlist;
        },

        likeTrack(track) {
            let likedPlaylist = this.playlists.find((p) => p.name === 'Liked');
            if (likedPlaylist === undefined) {
                likedPlaylist = this.createPlaylist({ name: 'Liked' });
            }
            likedPlaylist.tracks.push(track);
        }
    }

});