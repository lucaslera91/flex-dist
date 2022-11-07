import React from 'react';
import { Badge } from 'react-bootstrap';
import { BadgeProps } from 'react-bootstrap';
import closeIcon from '../../recursos/imagenes/closeIcon.png';
import { Link } from 'react-router-dom';
import './pill.modules.css'


function Pill({text, value, closeHandler}) {

    return(
        <Badge as='div' pill bg={'light'} text={'dark'} className={'p-2 ms-4 my-2 '}>
            <span className='pillFilterText'>{text}</span>
            <img data-value={value} src={closeIcon} height='12px' className='ms-2' onClick={closeHandler}/>
        </Badge>  


    )
}

export {Pill}