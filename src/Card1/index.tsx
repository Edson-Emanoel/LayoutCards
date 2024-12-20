import './main.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IAula {
      id: number,
      aula: string,
      imgUrl: string,
      tema: string,
      texto: string,
}

export default function CardMainv1() {

      const [data, setData] = useState<IAula[]>([]);

      useEffect(() => {
            axios.get("http://localhost:3000/aulas1")
                 .then(res => setData(res.data))
      }, [data, setData])

      return (
            <div className="cards">
                  {
                        data.map((aula) => (
                              <div className="card1" key={aula.id}>
                                    <h6 className='number'>{aula.aula}</h6>
                                    <img src={aula.imgUrl} alt={aula.tema} />
                                    <h3 className='title'>{aula.tema}</h3>
                                    <div>{aula.texto}</div>
                              </div>
                        ))
                  }
            </div>
      )
}