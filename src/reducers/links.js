import {
  GET_LINKS,
  ADD_POST,
  UPVOTE_POST,
  ADD_COMMENT
} from '../constants/ActionTypes'
import  {findNodeInTree} from '../constants/common'

const initialState = {
  links: []
}
const links = (state = initialState, action) => {
  let links;
  switch (action.type) {
    case GET_LINKS:
      return Object.assign({}, {...state}, {links: action.links})
    case ADD_POST:
      links = JSON.parse(JSON.stringify(state.links));
      links.push(action.payload.post);
      return Object.assign({}, {...state}, {links})
    case ADD_COMMENT:
      links = JSON.parse(JSON.stringify(state.links));
      let parent = findNodeInTree(links, action.payload.post.parentId);
      if(!parent.comments){
        parent.comments = [];
      }
      parent.comments.push(action.payload.post);
      return Object.assign({}, {...state}, {links})
    case UPVOTE_POST:
      links = JSON.parse(JSON.stringify(state.links));
      let node = findNodeInTree(links, action.payload.postId);
      node.myVote = action.payload.value;
      return Object.assign({}, {...state}, {links})

    default:
      return state
  }
}

export default links
