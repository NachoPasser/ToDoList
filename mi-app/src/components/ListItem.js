import React, {useState} from 'react'
import s from './ListItem.module.css';
export default function ListItem({text, onClose}) {
  const [checked, setChecked] = useState(false)

  return (
    <div className={s.item}>
      <input className={s.checkbox} 
      onClick={() => setChecked(oldCheck => oldCheck === false ? true : false)} //si check es false, lo pongo en true y viceversa
      type="checkbox" 
      />
      {!checked ? <span className={s.text}>{text}</span> : <span className={s.checkedText}>{text}</span>}
      {!checked ? null : <button className={s.btn} onClick={() => onClose(text)}>🗑️</button>} {/*Si checked es falso, no muestro nada sino btn*/}
    </div>
  )
}
