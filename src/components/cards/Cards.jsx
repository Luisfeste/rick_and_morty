import Card from '../card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose} = props;
   return (
   <div className={styles.container}>
      { characters.length=== 0 ?(
        <p style={{color: "green", marginTop: "150px", fontSize: "24px"}}>
         ¡Busca un Personaje!

        </p>)
         :
         (
            characters.map(char=> <Card
               id={char.id}
               key={char.name}
               name={char.name}
               species= {char.species}
               gender= {char.gender}
               image={char.image}
               onClose={()=> onClose(char.id)}
         />)  
         )
      }
   </div>
)}
