import React from 'react'
import NotAuthenticated from './notAuthenticated'

const isAuthenticated = true
const Authentication = (Component: () => JSX.Element) =>
    () => isAuthenticated ? <Component /> : <NotAuthenticated />

export default Authentication