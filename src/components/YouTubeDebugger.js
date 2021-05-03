// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
           }
            })
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
            video: {
                        ...this.state.settings.video,
                resolution: '720p'
            }
            }
        })
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleBitrate} className='bitrate'> BITRATE </button>
                </div>
                <br></br>
                <br></br>
                <div>
                    <button onClick={this.handleResolution} className='resolution'> RESOLUTION </button>
                </div>
            </div>
            
        )
    }
}