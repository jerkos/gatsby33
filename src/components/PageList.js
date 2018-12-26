import React from 'react'
import { Link, graphql } from 'gatsby'

class PageList extends React.Component {
    static get pages() {
        return [
            {name: 'About me', slug: 'about-me'},
            {name: 'Contact', slug: 'contact'},
        ];
    }

    render() {
        return (
            <ul className={this.props.className || undefined}>
                {
                    PageList.pages.map(({ name, slug }) => 
                        <li>
                            <Link to={slug}>{name}</Link>
                        </li>
                    )
                }
            </ul>
        );
    }
}

export default PageList