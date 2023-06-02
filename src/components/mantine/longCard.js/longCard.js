import "./longCard.css"
import { Card } from '@mantine/core';

function LongCard(props) {
    return (
        <Card shadow='sm' padding='lg' radius='lg' className='card'>
            <div className='cardText'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className='cardImage'>
                <img src={props.image} alt='drone' />
            </div>
        </Card>
    );
}

export default LongCard;