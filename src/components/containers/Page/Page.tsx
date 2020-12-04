import { CircularProgress } from '@material-ui/core'
import React from 'react'
import makePageClasses from '../../../styles/page'
import PageProps from './PageProps'

export default function Page({ auth, children }: PageProps) {
  const classes = makePageClasses();

  return (
    <div className={classes.root}>
      {auth?.initializing && 
        <CircularProgress color="primary" style={{margin: '1rem auto'}}/>
      }
      <div className={classes.container}>
        {!auth?.initializing &&
          {children}
        }
      </div>
    </div>
  )
}
