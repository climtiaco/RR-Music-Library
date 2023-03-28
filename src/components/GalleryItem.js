import { useState } from 'react'

export function GalleryItem({ song }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { trackName } = song;

    const simpleView = (
            <div style={simpleStyle}>
                <h3>{song.trackName}</h3>
                <h4>{song.collectionName}</h4>
            </div>
        )
    

    const detailView = (
        
            <div style={detailStyle}>
                <h2>{song.trackName}</h2>
                <h3>{song.collectionName}</h3>
                <h4>{song.primaryGenreName}</h4>
                <h4>{song.releaseDate}</h4>
            </div>
        )

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${song.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }
        
    

    return (
        <div onClick={() => isExpanded(!isExpanded)}
        style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple Style when 'Style' is false! */}
            {isExpanded ? detailView() : simpleView()}

        </div>
    )

}






// import { useState } from 'react'



// export function GalleryItem (song) {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const { trackName } = song;


//     const handleClick = () => {
//         setIsExpanded(!isExpanded);
//     }

//     let simpleStyles = {display: 'inline-block'};
//     const expandedStyles = {};

//     return (
//         <div onClick={handleClick} style={isExpanded ? expandedStyles : simpleStyles}>
//             <p>{trackName}</p>
//         </div>
//     )
// }