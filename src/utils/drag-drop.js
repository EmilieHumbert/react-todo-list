export const reorderList = ({ destination, source }, list) => {
  // do nothing when dragging outside container
  if (!destination) {
    return list;
  }
  // do nothing if item doesn't move
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return list;
  }
  // find element in array that has same id as element dragged
  const movedItem = list[source.index];
  // remove the moved item from the list array
  const otherItems = list.filter((_item, index) => index !== source.index);
  // update the array
  return [
    // add items from 0 to moved item new index in new array
    ...otherItems.slice(0, destination.index),
    // add moveItem to the new array
    movedItem,
    // add remaining items from new index onwards
    ...otherItems.slice(destination.index),
  ];
};
