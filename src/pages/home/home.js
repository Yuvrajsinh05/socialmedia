import React from 'react'
import Topbar from '../../components/topbar/topbar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import Sidebar from '../../components/sidebar/sidebar'
import './home.css'

export default function Home() {
  return (
    <>
        <Topbar/>
        <div className='main-container'>
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
    </>
  )
}
