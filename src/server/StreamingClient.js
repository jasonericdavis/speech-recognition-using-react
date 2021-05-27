const { RevAiStreamingClient, AudioConfig } = require('revai-node-sdk');

module.exports = class StreamingClient {
    
    constructor(accessToken, onData) {
        console.log('Loading Streaming Client')
        this.accessToken = accessToken
        this.onData = onData
    }

    start() {
        // if(!this.revAiStreamingClient) {
        //     this.revAiStreamingClient = new RevAiStreamingClient(
        //         this.accessToken, new AudioConfig('audio/x-wav')
        //     )
        // }
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
        })
        
        this.revStream = this.revAiStreamingClient.start()
        this.revStream.on('data', data => this.onData(data))
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