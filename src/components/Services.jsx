import { services } from '../data/data'
import Title from './Title'
import Service from './Service'
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='Beneficios' subTitle='universitarios' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}
export default Services
