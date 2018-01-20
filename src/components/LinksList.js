import React from 'react'
import PropTypes from 'prop-types'
import AutodditLink from './AutodditLink'

class LinksList extends React.Component{

  render(){
    const {links, onUpvote, onCommentClick} = this.props;
    return (<ul>
        {links.map((link)=> {
          return <AutodditLink link={link} key={link.id} onUpvote={onUpvote} onCommentClick={onCommentClick} />
        })}
    </ul>)
  }
}

LinksList.propTypes = {
  links: PropTypes.array.isRequired,
  onUpvote: PropTypes.func.isRequired,
  onCommentClick: PropTypes.func.isRequired
}

export default LinksList
