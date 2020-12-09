import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './styles/main.scss'
import { Measurements, LoadingIndicator, AppHeader } from './components/components'
import { fetch } from './operations'
import { setFetchSuccess } from './redux/actions'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { API } from './constants'

export const MainView = () => {
  const dispatch = useDispatch()

  return (<div>
    <AppHeader />
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoadingIndicator>
            <Measurements />
          </LoadingIndicator>
        </Route>
        <Route exact path='/other'>
          <div>NONE</div>
        </Route>
      </Switch>
    </BrowserRouter>
  </div>)
}