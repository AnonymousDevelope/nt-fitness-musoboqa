import React from 'react'
import { UserHeader } from '../../../layouts'
import { UstozCard } from '../../../UI'

function index() {
  return (
    <>
      <UserHeader titlename='Ustozlar'/>
      <main className='UserUstozlar'>
          <UstozCard />
          <UstozCard />
          <UstozCard />
          <UstozCard />
          <UstozCard />
          <UstozCard />
      </main> 
    </>
  )
}

export default index