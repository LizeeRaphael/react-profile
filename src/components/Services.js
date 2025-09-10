import { useState } from 'react';
import '../css/services.css';
import { UilWebGrid } from '@iconscout/react-unicons';
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilCheckCircle } from '@iconscout/react-unicons';
import { UilArrow } from '@iconscout/react-unicons';
import { UilPen } from '@iconscout/react-unicons';


export default function Services() {
    const [State, setState] = useState('');
    const [State1, setState1] = useState('');
    const [State2, setState2] = useState('');
    
   const UiClick = (event, value) =>{
         setState(State => value);
   }
   const UiClick1 = (event, value) =>{
    setState1(State1 => value);
  }
  const UiClick2 = (event, value) =>{
    setState2(State2 => value);
  }
   
  return (
        <>
           <h2 className='section__title'>Services</h2>
           <span className='section__subtitle'>What I do</span> 

           <div className='services__container container grid'>
                     {/* SERVICES 1 */}
                <div className='services__content'>
                    <div>
                        <UilWebGrid className='services__icon' />
                        <h3 className='services__title'>Website <br /> Design</h3>
                    </div>

                    <span  onClick={event => UiClick(event, 'active-modal')} className='button button--flex button--small button--link services__button'>
                        View More
                        <UilArrowRight className='button__icon' />
                    </span>

                    <div className={`services__modal ${State}`}>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>Frontend <br/> development</h4>
                            <UilTimes  onClick={event => UiClick(event, '')} className='services__modal-close' />

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>Proficient with No/Low code tools</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I can develop user interface in clean code.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I create ux element interactions.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I strategically position your brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                       {/* SERVICES 2 */}
                       <div className='services__content'>
                    <div>
                        <UilArrow className='services__icon' />
                        <h3 className='services__title'>Frontend <br /> Development</h3>
                    </div>

                    <span onClick={event => UiClick1(event, 'active-modal')} className='button button--flex button--small button--link services__button'>
                        View More
                        <UilArrowRight className='button__icon' />
                    </span>

                    <div className={`services__modal ${State1}`}>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>Frontend <br/> Developer</h4>
                            <UilTimes onClick={event => UiClick1(event, '')} className='services__modal-close' />

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I sit with your idea and craft user interface that works.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I leverage perspective from my creative and technical fields to deliver.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I design with users in mind.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I strategically position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                       {/* SERVICES 3 */}
                       <div className='services__content'>
                    <div>
                        <UilPen className='services__icon' />
                        <h3 className='services__title'>Backend <br /> Development</h3>
                    </div>

                    <span onClick={event => UiClick2(event, 'active-modal')} className='button button--flex button--small button--link services__button'>
                        View More
                        <UilArrowRight className='button__icon' />
                    </span>

                    <div className={`services__modal ${State2}`}>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>Backend <br/> Development</h4>
                            <UilTimes onClick={event => UiClick2(event, '')} className='services__modal-close' />

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I merge clean code that do the work.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I understand backend logic.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I can take on App development project.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <UilCheckCircle className='services__modal-icon' />
                                    <p>I build with your vision in mind.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>
          
        </>

  )
}
