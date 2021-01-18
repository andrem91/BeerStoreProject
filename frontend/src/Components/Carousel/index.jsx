import { useState, selectedIndex } from 'react'
import { Carousel } from 'react-bootstrap'

import tela1 from './tela-inicial01-slide.png'
import tela2 from './tela-inicial02-slide.png'
import tela3 from './tela-inicial03-slide.png'


function ControlledCarousel() {
    const [index, setIndex] = useState()

    const handleSelect = (selectIndex, e) => {
        setIndex(selectedIndex)
    }
    
    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tela1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Primeiro Slide</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tela2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Segundo Slide</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tela3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Terceiro Slide</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ControlledCarousel