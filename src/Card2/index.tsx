import { useEffect, useState } from 'react'
import './main2.css';
import axios from 'axios';

interface ICurso {
  id: number,
  imgUrl: string,
  texto: string
}

export default function CardMainv2() {

  const [data, setData] = useState<ICurso[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/cursos")
      .then(res => setData(res.data))
  }, )

  return (
    <>
      <div className="cards">
        {data.map((curso) => (
          <div className="card card-side" key={curso.id}>
            <img src={curso.imgUrl} alt={curso.texto} />
            <span>{curso.texto}</span>
          </div>
        ))}
      </div>
    </>
  )
}
