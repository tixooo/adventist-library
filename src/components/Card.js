import {useState,useEffect} from 'react';
import db from '../db/firebase.js'
import {onValue,ref} from 'firebase/database'
import {SingleCard} from '../components/singlecard/SingleCard.js'
import uniqid from 'uniqid'

function Card() {
  const [card, setCard] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setData([])
      const dbData = snapshot.val()
      if (dbData !== null) {
        Object.values(dbData).map((card) => {
          setData((oldArray) => [...oldArray, card])
        })
      }
    })
  }, [])



  return (
    <>
    {data.map(el =>
              <SingleCard
              id={uniqid()}
              image={el.fImage}
              name={el.name}
              author={el.author}
              />
        )}
    </>
  );
}

export default Card;