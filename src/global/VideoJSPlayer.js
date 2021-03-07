import React, { Component } from 'react';
import videojs from 'video.js';

export default class VideoJSPlayer extends Component {
    componentDidMount() {
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {});
        ///this.player = videojs(this.videoNode, this.props);
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video
                        ref={node => this.videoNode = node}
                        className="video-js"
                    />
                </div>
            </div>
        );
    }
};