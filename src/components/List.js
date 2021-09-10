export const List = (props) => {
  return (
    <ul>
      {
        props.items.length === 0 ?
          <li>No items yet</li>
          :
          props.items.map((item, index) => {
            return <li key={index}>{item}</li>
          })
      }
    </ul>
  )
};
export default List;
