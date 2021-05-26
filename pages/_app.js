//import App from 'next/app'
//import React from 'react'
//import io from 'socket.io-client'
import '../styles/global.css'
import Head from 'next/head'

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return { pageProps }
//   }
//   state = {
//     socket: null,
//   }
//   componentDidMount() {
//     // connect to WS server and listen event
//     const socket = io()
//     this.setState({ socket })
//   }

//   // close socket connection
//   componentWillUnmount() {
//     this.state.socket.close()
//   }

//   render() {
//     const { Component, pageProps } = this.props
//     return <Component {...pageProps} socket={this.state.socket} />
//   }
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <script src="https://www.WebRTC-Experiment.com/RecordRTC.js"></script>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp