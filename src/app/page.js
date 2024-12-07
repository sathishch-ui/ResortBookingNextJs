import React from 'react'
import DBConnection from './utils/config/db'

const HomePage = async () => {
  
  await DBConnection()
  
  return (
    <div>Welcome to Holiday Resort</div>
  )
}

export default HomePage