import { CircularProgress } from '@material-ui/core'
import React from 'react'
import PageProps from './PageProps'

export default function Page({ auth, children }: PageProps) {
  return (
    <div className="page">
      {auth?.initializing && 
        <CircularProgress color="primary" style={{margin: '1rem auto'}}/>
      }
      {!auth?.initializing &&
        {children}
      }
    </div>
  )
}
