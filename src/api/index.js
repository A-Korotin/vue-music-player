import { api } from '@/api/instance'
import { PlaylistApi } from '@/api/playlistApi';
import { DeezerApi } from '@/api/deezerApi';
import { TrackApi } from './trackApi';

export const playlistApi = new PlaylistApi(api);
export const deezerApi = new DeezerApi(api);
export const trackApi = new TrackApi(api);