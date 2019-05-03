const nodeOne = {name: 'Alexandra', next: '2345'}
const nodeTwo = {name: 'Kirstin', next: '3456'}
const nodeThree = {name: 'Juliet', next: '4567'}
const nodeFour = {name: 'Timmy', next: '5678'}
const nodeFive = {name: 'Jacob', next: null}

const collection = {
  '1234': nodeOne,
  '2345': nodeTwo,
  '3456': nodeThree,
  '4567': nodeFour,
  '5678': nodeFive
}
function next(node, collection){
  return collection[node.next]
}

function getName(node){
  return node.name
}

function headNode(list, collection){
  return collection[list]
}
next(nodeOne)

function nodeAt(index, list, collection){
  let node = collection[list]
  for(let i = 0; i < index; i ++){
    node = next(node, collection)
  }
  return node
}

function addressAt(index, list, collection){
  if(index < 1) {
    return list
  }
  return nodeAt(index -1, list, collection).next

}

function indexAt(node, collection, list){
  let count = 0
  let updatedNode = headNode(list, collection)

  while(updatedNode !== node){
    count ++;
    updatedNode = next(updatedNode, collection)
  }
  return count
}

function insertNodeAt( index, newNodeAddress, list, collection){
  //find the nodes before and at index, saving them to variables
  const nodeBefore = nodeAt(index-1, list, collection)
  const nodeAfter = nodeAt(index, list, collection)

  // find the address for each node that needs altering
  const nodeBeforeAddress = addressAt(index-1, list, collection)
  const nodeAfterAddress = addressAt(index, list, collection)

  // update the node before to point at node to be inserted
  nodeBefore.next = newNodeAddress
  // add the new node to the collection and update its next
  const newNode = collection[newNodeAddress]
  newNode.next = nodeAfterAddress
}

function deleteNodeAt(index, list, collection){
  //find node before the index
  const nodeBefore = nodeAt(index -1, list, collection)
  // find node at index
  const nodeAtIndex = nodeAt(index, list, collection)
  // set node befores 'next' to node at index therefore skipping the node at index, deleting it from the list
  nodeBefore.next = nodeAtIndex.next
}
