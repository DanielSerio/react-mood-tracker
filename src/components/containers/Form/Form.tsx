import React from 'react'
import makeFormClasses from '../../../styles/form'
import FormProps from './FormProps'

export default function Form({children, title, buttons, ...rest}: FormProps) {
  const classes = makeFormClasses();

  return (
    <form className={classes.root} noValidate {...rest}>
      {title &&
        <header className={classes.header}>
          <h1 className={classes.title}>{title}</h1>
        </header>
      }
      {children}
      <footer className={classes.footer}>
        {buttons}
      </footer>
    </form>
  )
}
