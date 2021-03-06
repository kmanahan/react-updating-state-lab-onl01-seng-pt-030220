import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
        bitrate: 8,
        video: {
            resolution: '1080p'
        }
        }
    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }

    handleClickRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
        console.log(this.state.settings.video.resolution)
    }


    render(){
        return (
            <div>
            <button className='bitrate' onClick={this.handleClick}>{this.state.settings.bitrate}</button>
            <button className='resolution' onClick={this.handleClickRes}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}