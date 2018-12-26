import React from 'react'
import Bio from './Bio'
import PageList from './PageList'

import styles from './Sidebar.module.styl'


class Sidebar extends React.Component {
    render() {
        return (
            <div className={styles.sidebar}>
                <h1>Marc Dubois</h1>
                <Bio />
                <PageList className={styles.sidebarPageList} />
            </div>
        );
    }
}

export default Sidebar;