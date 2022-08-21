function TableElement(props){
  const data = props.data

  function deleteThis(){
    props.onDelete(props.data.date)
  }

  return(
    <div className="training__element">
      <label className="training__date">{data.date.split('-').reverse().join('.')}</label>
      <label className="training__distance">{data.distance}</label>
      <button className="training__delete" onClick={deleteThis}>X</button>
    </div>
  )
}

export default TableElement