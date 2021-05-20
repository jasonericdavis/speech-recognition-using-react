import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Socket from './lib/socket'

const socket = Socket();

const App = () => {
    const [connected, setConnected] = useState(false)

    useEffect(() => {
        setSocketState(socket.state)
    }, [socket.state])

    return (
        <div>
            <h1>Hello!!</h1>
            <p>{socketState}</p>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById('app'));