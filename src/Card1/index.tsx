import React from 'react';
import RectImg from '../assets/react.svg'
import './main.css';

export default function CardMainv1() {
  return (
    <div className="cards">
      <div className="row">
            <div className="card">
                  <h6 className='number'>Aula 1</h6>
                  <img src={RectImg} alt="" />
                  <h3 className='title'>React</h3>
                  <div>Primeira aula</div>
            </div>

            <div className="card">
                  <h6 className='number'>Aula 2</h6>
                  <img src={RectImg} alt="" />
                  <h3 className='title'>React</h3>
                  <div>Primeira aula</div>
            </div>
      </div>
      <div className="row">
            <div className="card">
                  <h6 className='number'>Aula 3</h6>
                  <img src={RectImg} alt="" />
                  <h3 className='title'>React</h3>
                  <div>Primeira aula</div>
            </div>
            <div className="card">
                  <h6 className='number'>Aula 4</h6>
                  <img src={RectImg} alt="" />
                  <h3 className='title'>React</h3>
                  <div>Primeira aula</div>
            </div>
      </div>
      <div className="card">
            <h6 className='number'>Aula 5</h6>
            <img src={RectImg} alt="" />
            <h3 className='title'>React</h3>
            <div>Primeira aula</div>
      </div>
    </div>
  )
}