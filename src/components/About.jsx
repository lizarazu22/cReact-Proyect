import AbautAImg from '../images/AbautA.png';
import Title from './Title';

const AbautA = () => {
  return (
    <section className='section' id='AbautA'>
      <Title title='Ingenieria' subTitle='Sistemas' />

      <div className='section-center AbautA-center'>
        <div className='AbautA-img'>
          <img src={AbautAImg} className='AbautA-photo' alt='awesome beach' />
        </div>
        <article className='AbautA-info'>
          <h3>Informate sobre nosotros</h3>
          <p>
          La ingeniería de sistemas es una disciplina que se enfoca en el diseño, desarrollo y 
          gestión de sistemas complejos. Su objetivo principal es resolver problemas y satisfacer 
          las necesidades de las organizaciones utilizando un enfoque sistemático.
          </p>
          <p>
          Los ingenieros de sistemas aplican principios de ingeniería y conocimientos técnicos 
          para analizar, diseñar e implementar sistemas que integren hardware, software y procesos. 
          Esto implica comprender las necesidades y requerimientos de los usuarios, identificar soluciones
           técnicas apropiadas y coordinar la implementación de dichas soluciones.
          </p>
          <a href='#' className='btn'>
            ver mas 
          </a>
        </article>
      </div>
    </section>
  );
};
export default AbautA;
