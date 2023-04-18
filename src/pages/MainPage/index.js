import React from 'react'
import MainLayout from '../../components/Layouts/Main'
import { useParams } from 'react-router-dom'
import SideBar from '../../components/snippets/Sidebar'
import Dashboard from '../../components/snippets/Dashboard'
import Market from '../../components/snippets/Market'

const DisplayContent = ({ tab }) => {
  switch(tab) {
    case 'dashboard':
      return <Dashboard />
      case 'market':
        return <Market />
    default:
      return <Dashboard />
  }
}

const MainPage = () => {
  const params = useParams();
  
  return (
    <MainLayout>
      <div className='w-full flex'>
        <div style={{ width: '15%'}}>
          <SideBar />
        </div>
        <div style={{ width: '85%', overflow: 'auto' }}>
          <DisplayContent { ...params } />
        </div>
      </div>
    </MainLayout>
  )
}

export default MainPage
