export interface Song {
    title: string;
    duration: string;
}

export interface Album {
    title: string;
    description: string;
    songs: Song[];
}

export interface AlbumData {
    albums: Album[];
}
