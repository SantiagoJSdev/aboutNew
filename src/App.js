
import './App.css';

export const App = () => {
  return (
    <div className='home__container'>

      <section className='home__left'>
        <div className='left__container'>
          <div className='left__container--titulo'>
            <h1>Santiago J Reyes.</h1>
            <h3>Front-End Developer.</h3>
          </div>

          <div className='left__container--skills'>
            <div className='skills__FrontEnd'>
              <h1>FrontEnd</h1>
              <div className='skills__FrontEnd--all'>
                <div className='btn__skill JavaScript'>JavaScript</div>
                <div className='btn__skill JavaScript'>React</div>
                <div className='btn__skill JavaScript'>Redux</div>
                <div className='btn__skill JavaScript'>TypeScript</div>
                <div className='btn__skill JavaScript'>CSS</div>
                <div className='btn__skill JavaScript'>Html</div>
                <div className='btn__skill JavaScript'>Responsive Design</div>
              </div>
            </div>
            <div className='skills__BackEnd'>
              <h1>BackEnd</h1>
              <div className='skills__BackEnd--all'>
                <div className='btn__skill '>NodeJs</div>
                <div className='btn__skill '>Express</div>
                <div className='btn__skill '>Sequelize</div>
                <div className='btn__skill '>Mongoose</div>

              </div>
            </div>
          </div>
          <p>Linkedin:<a href='https://www.linkedin.com/in/santiagoa31219' target="blank"><i className="fab fa-linkedin"></i></a> </p>
          <p>Correo: <span>Santiagoreyesmarin1986@gmail.com</span></p>
          <p>Cv: <span><a href='https://xd.adobe.com/view/a8382433-4a35-4faf-9349-bb6f5aac716b-fd6b/?hints=off' target="blank">here!</a></span></p>
          <p>Cv: <span><a className='PDF' href='https://github.com/SantiagoJSdev/aboutNew/files/8950914/Santiago-Pdf.pdf' target="blank">PDF</a></span></p>

          <p>Idioma: <span>English A2</span></p>
          <p>Hobbies: <span>Cine</span><span>Games</span><span>Baloncesto</span></p>
        </div>
      </section>
      <section className='home__center'>

      </section>
      <section className='home__right'>
        <div className='right__container'>
          <h1>??Hola! estoy motivado por el desarrollador web. Mis habilidades y conocimientos est??n enfocadas en JavaScript,
            React, Redux, HTML5, CSS3, Node. Quisiera cubrir una posici??n en procesos de front-end con JavaScript usando React y
            en el back-end con Node.js. Soy una persona enfocada en mantenerse actualizado en nuevas tecnolog??as, actualmente trabajo para <span><a href='https://www.linkedin.com/company/tecnopac/' target="blank">Tecnopac</a></span>, como Full Stack Junior, donde tengo la oportunidad de aprender cada d??a y desarrollar mis habilidades.</h1>

          <div className='right__container--academica'>
            <h1>Formaci??n acad??mica:</h1>
            <p>Universitaria: <span>T??cnico Superior en Inform??tica.</span></p>
            <p>Henry: <span>Full Stack Web Developer - Bootcamp, intensivo con 700 horas de pr??ctica en tecnolog??as Web.</span></p>
          </div>
          <div className='right__container--academica'>
            <h1>Experiencia Laboral:</h1>
            <p>Acad??mica: <span><a href='https://pg-henry.vercel.app/' target="blank"  > E-commerce, proyecto grupal Bootcamp soy henry.</a> </span></p>
            <p>Tecnopac: <span><a href='https://una-idea.herokuapp.com/' target="blank"  >Proyecto 1Idea - Desarrollo inicial del prototipo webApp para una empresa de consultor??a, tecnolog??as
              utilizadas en el frontend: React, en los estilos css3 vanila y en el backend: node.js, Express, Mongoose, mongodb.</a></span></p>
            <p>Tecnopac: <span>Proyecto Estuhouse - Desarrollo webApp para una empresa de alquiler de apartamentos y habitaciones para estudiantes universitarios, tecnolog??as
              utilizadas en el frontend: React, en los estilos css3 vanila y en el backend: node.js, Express, Mongoose, mongodb. </span></p>
          </div>
          <div className='right__container--academica'>
            <h1>Portafolio:</h1>
            <p>To-do App: <span><a href='https://santiagojsdev.github.io/portafolio/' target="blank"> <i className="fas fa-briefcase"></i> </a></span></p>
          </div>
        </div>
      </section>

    </div>
  );
}

