import { GalleryItem } from "./GalleryItem.js";
import { useState } from "react";



export function Gallery ({data}) {
    const songs = data.filter((result) => result.kind === "song")


    return (
        <div>
            {songs.map((song) => <GalleryItem song={song} key={song.trackId} />)}
        </div>
    )
}