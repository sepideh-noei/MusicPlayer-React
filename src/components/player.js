
import React from 'react';
import playerDetails from './playerDetails';
import playerControls from './playerControls'

function player(props) {
    return (
        <div className="c-player">
            <audio></audio>
            <h4>playing Now!</h4>
            <playerDetails song={props.song} />
            <playerControls />
            <p><strong>Next Up:</strong>{props.nextSong.title} - {props.nextSong.artist}</p>
        </div>
    )
}

export default player
