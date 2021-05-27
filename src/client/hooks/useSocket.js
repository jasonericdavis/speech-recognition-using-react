import React,{ useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3000')
socket.on('connect', () => {console.log(`socket connected (${socket.id})`)})
socket.on('disconnect', () => {console.log('socket disconnected')} )

export default function useSocket(eventName, cb) {
  useEffect(() => {
    socket.on(eventName, cb)

    return function useSocketCleanup() {
      socket.off(eventName, cb)
    }
  }, [eventName, cb])

  return socket
}