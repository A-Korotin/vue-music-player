<template>
    <main class="container bg-primary column q-pl-sm">
        <q-ajax-bar ref="bar" position="top" color="secondary" size="5px" />
        <h6>Artists</h6>
        <section class="row fit inline">
            <ArtistCard v-for="artist in artists" v-bind:key="artist.id" :name="artist.name" :picture="artist.picture" />
        </section>
        <h6>
            Tracks
        </h6>
        <section class="column fit inline">
            <TrackCard v-for="(track, index) in tracks" v-bind:key="track.id" :id="track.id" :name="track.title"
                :artist="track.artist.name" :cover="track.album.cover_small" :duration="track.duration"
                :preview="track.preview" :index="index" @click="onTrackPlay" />

        </section>
    </main>
</template>
<script>

import { mapWritableState, mapActions } from 'pinia'
import { toRef } from 'vue'
import { playerStore } from '@/stores/playerStore'
import { deezerApi } from '@/api/index'
import TrackCard from '@/components/TrackCard.vue'
import ArtistCard from '@/components/ArtistCard.vue'

export default {
    data() {
        return {
            tracks: [],
            artists: []
        };
    },
    props: {
        query: {
            type: String,
            required: false,
            default: 'Bones'
        }
    },
    setup(props) {
        const reactiveQuery = toRef(props, 'query');
        return { reactiveQuery };
    },

    computed: {
        ...mapWritableState(playerStore, ['queue'])
    },

    methods: {
        filterArtists(tracks) {
            let totalArtists = tracks.map((a) => {
                return JSON.stringify({
                    id: a.artist.id,
                    name: a.artist.name,
                    picture: a.artist.picture_big
                });
            });
            totalArtists = Array.from(new Set(totalArtists)).slice(0, 5);
            return totalArtists.map(a => JSON.parse(a));
        },

        onTrackPlay() {
            this.queue = this.tracks
        }
    },

    async mounted() {
        const response = await deezerApi.search(this.query);
        const tracks = response.data.data;
        this.tracks = tracks;
        this.artists = this.filterArtists(tracks);
    },

    watch: {
        reactiveQuery: {
            async handler(oldValue, newValue) {
                console.log(oldValue, newValue);
                const response = await deezerApi.search(this.query);
                const tracks = response.data.data;
                this.tracks = tracks;
                this.artists = this.filterArtists(tracks);
            }
        }
    },

    components: { TrackCard, ArtistCard }
}
</script>
<style scoped lang="scss">
@import '@/css/app.scss';
</style>