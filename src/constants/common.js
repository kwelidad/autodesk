
const findNode = (node, id) => {
    if(node.id === id){
      return node;
    } else if(node.comments) {
      for(let i=0;i<node.comments.length;i++){
        let found = findNode(node.comments[i], id);
        if(found){
          return found;
        }
      }
    }
    return null;
}

export const findNodeInTree = (tree, id) => {
  for(let i=0;i<tree.length;i++){
    const found = findNode(tree[i], id);
    if(found){
      return found;
    }
  }
  return null;
}

export const initialPostValues = {
  upvotes: 0,
  myVote:0,
  comments: []
}

let uniqueNumber = () => {
    var date = Date.now();

    if (date <= uniqueNumber.previous) {
        date = ++uniqueNumber.previous;
    } else {
        uniqueNumber.previous = date;
    }

    return date;
}

uniqueNumber.previous = 0;
export const ID = ()=>{
  return uniqueNumber();
}
