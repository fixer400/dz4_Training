import { useState } from "react"
import TableElement from "./TableElement"

function TrainingApp(){
  const [form, setForm] = useState({
    date: '',
    distance: '',
  })
  const [tableData, setTableData] = useState([])

  function onSubmit(){
    if(form.date !== '' && form.distance !== 0){
      let newArr = tableData
      //проверка наличия даты в state
      if(checkDate(form.date)){
        newArr.map((element) => element.date === form.date ? element.distance = parseFloat(element.distance) + parseFloat(form.distance) : element)
      }
      else{
        newArr.push(form)
      }
      //
      newArr.sort((a,b) => a.date > b.date ? 1 : -1)//сортировка по date
      setTableData(newArr)
      setForm({distance:'', date:''})
    }
    else{
      alert('Поле не может быть пустым')
    }
  }

  function checkDate(date){
    for(let i = 0; i < tableData.length; i++){
      if(date === tableData[i].date){
        return true
      }
    }
    return false
  }

  function handleChange({target}){
    const name = target.name
    const value = target.value
    setForm( (prevForm) => ({...prevForm,[name]: value}))
  }

  function deleteTableElement(date){
    const newArr = tableData.filter((e)=>e.date !== date)
    setTableData(newArr)
  }

  return(
    <div className = "training">
      
      <div className="training__header">
        <div className="date">
          <p>Дата(ДД.ММ.ГГ)</p>
          <input className="training__input"  name="date" type = 'date' value={form.date} onChange = {handleChange}></input>
        </div>

        <div className="distance">
          <p>Пройдено км</p>
          <input className="training__input" name="distance" type='number' value={form.distance} onChange = {handleChange}></input>
        </div>

        <button className="training__button" onClick={onSubmit}>ОК</button>
      </div>

      <div className="training__table">
        <div className="training__header">
          <p>Дата (ДД.ММ.ГГ)</p>
          <p>Пройдено км</p>
          <p>Действия</p>
        </div>
        <div className="training__data">
          {tableData.map((data) => <TableElement onDelete = {(date) => deleteTableElement(date)} key = {data.date} data = {data}/>)}
        </div>
      </div>
    </div>
  )
}

export default TrainingApp