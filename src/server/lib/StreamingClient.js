const { RevAiStreamingClient, AudioConfig } = require('revai-node-sdk');

module.exports = class StreamingClient {
    
    constructor(accessToken, io) {
        console.log('Loading Streaming Client')
        this.accessToken = accessToken
        this.io = io
    }

    start() {
        this.revAiStreamingClient = new RevAiStreamingClient(
            this.accessToken, new AudioConfig('audio/x-wav')
        )

        this.revAiStreamingClient.on('close', (code, reason) => {
            console.log(`Connection closed, ${code}: ${reason}`);
        })
    
        this.revAiStreamingClient.on('httpResponse', code => {
            console.log(`Streaming client received http response with code: ${code}`);
        })
    
        this.revAiStreamingClient.on('connectFailed', error => {
            console.log(`Connection failed with error: ${error}`);
        })
    
        this.revAiStreamingClient.on('connect', connectionMessage => {
            console.log(`Connected with job id: ${connectionMessage.id}`);
            this.io.emit('streaming-connected', connectionMessage)
        })
        
        this.revStream = this.revAiStreamingClient.start()
        this.revStream.on('data', data => {
            this.io.emit('transcript', data)
        })
    }

    end() {
        this.revStream = null
        this.revAiStreamingClient.end()
    }

    stream(data) {
        console.log('streaming data ....')
        this.revStream && this.revStream.write(data)
    }
}