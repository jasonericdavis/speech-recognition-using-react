import React from 'react';
import ReactDOM from 'react-dom'
import App from './app'
//ReactDOM.render(<div>Hello</div>, document.getElementById('root'))
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

if(import.meta.hot) {
    import.meta.hot.accept();
}