import React from 'react';
import './index.css';
import img from './img/l.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import video from './img/Nadya.MOV';

function App() {
  return (
    <div className="wrapper">
    <div className='App'>
      <h1>
        THE BEST OF THE BEST
      </h1>
      <div className='container'>
        <img src={img} alt="Image 1" />
        <p className='container-text'>
        Ты- словно утренний рассвет,<br/>
        В тебе загадка и тепло.<br/>
        Тебя я встретил- и ответ<br/>
        Нашел я то, к чему так долго шёл.<br/>
        <br/>
        Твоя улыбка- солнца свет<br/>
        Она куражит с первых слов.<br/>
        И пусть пока нас рядом нет,<br/>
        Но в сердце оживает столько слов.<br/>
        <br/>
        </p>
      </div>
      <div className='container-p'>
        <img src={img1} alt="Image 2" />
        <p className='container-text'>          
        Увидел тебя- и мир изменился,<br/> 
        Душа в тот момент моя озарилась.<br/>
        Никого я не видел красивее тебя.<br/>
        И уверен, что лучше- не найду никогда.<br/>
        <br/>
        Уверен я, встретим мы вместе с тобой<br/>
        Ещё ни один закат и рассвет.<br/>
        В душе ты моей поставила точку,<br/>
        Что ближе тебя человека мне нет.<br/>
        <br/>
        </p>
      </div>
      <div className='container-p'>
        <img src={img2} alt="Image 3" />
        <p className='container-text'>
        А можно я, пока читаешь ты<br/>
        С улыбкой эти строчки,<br/>
        Скажу, что в мире все цветы<br/>
        В одной растут лишь точке?<br/>
        <br/>
        И точка та — твоя душа.<br/>
        Ты можешь мне не верить,<br/>
        Она цветет там не спеша<br/>
        В любой из дней недели.<br/>
        </p>
      </div>
      <div className="container" id='video'>
        <video controls>
          <source src={video} type='video/mp4' />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
    </div>
  );
}

export default App;