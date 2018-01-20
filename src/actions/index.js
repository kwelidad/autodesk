import mock_server from '../api/mock_server'
import * as types from '../constants/ActionTypes'
import {findNodeInTree, ID} from '../constants/common'

const receiveLinks = links => ({
  type: types.GET_LINKS,
  links
});


const buildLinksTree = (links) => {
  let tree = [];
  links.forEach((item)=> {
    if(!item.parentId){
      tree.push(item);
    } else {
      let parent = findNodeInTree(tree, item.parentId);
      if(parent){
        parent.comments = parent.comments||[];
        parent.comments.push(item);
      }
    }
  })
  return tree;
}

export const getLinks = () => dispatch => {
  mock_server.getLinks(links => {
    const tree = buildLinksTree(links)
    dispatch(receiveLinks(tree))
  })
}
export const addPost = (postData) => dispatch => {
  const post = Object.assign({}, {...postData}, {id: ID()});
  dispatch({type:  types.ADD_POST,
    payload: {post}
  })
}
export const addComment = (comment) => dispatch => {
  const post = Object.assign({}, {...comment}, {id: ID()});
  dispatch({type:  types.ADD_COMMENT,
    payload: {post }
  })
}

export const upvotePost = (postId, value) => dispatch => {
  dispatch({type:  types.UPVOTE_POST,
    payload: {postId, value}
  })
}
