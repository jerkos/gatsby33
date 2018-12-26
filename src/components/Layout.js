import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import Sidebar from './Sidebar';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    const isRootPath = location.pathname === rootPath
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: isRootPath ?`5% 5%` : ' 2% 25%',
          maxHeight: isRootPath ? '100vh !important' : undefined
        }}
      >
        {header}
        {location.pathname === rootPath ?
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, height: '100%', maxHeight: '100%', overflow: 'none' }}>
              <Sidebar />
            </div>
            <div style={{ flex: 3, maxHeight: '100%', overflowY: 'scroll', overflowX: 'none', padding: '0 5%', textAlign: 'justify' }}>
              {children}
            </div>
          </div>
          :
          children
        }
      </div>
    )
  }
}

export default Layout
