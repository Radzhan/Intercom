import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addNumber, checkPassword, deleteNumber } from '../Pasword/paswordSlice';

const PaswordPanel = () => {
    const counterForClass = useSelector((state: RootState) => state.password.arrForClass);
    const counterValue = useSelector((state: RootState) => state.password.value);
    let simbolForPassword = '';
    
    for (let i = 0; i < counterValue.length; i++){
        simbolForPassword += '*'
    }

    
    const simbol = '<' ;
    const dispatch = useDispatch();
    return (
        <div className='flex-card'>
            <div className={counterForClass.join(' ')}>{simbolForPassword}</div>
            <button className='btn-flex' onClick={() => dispatch(addNumber(1))}>1</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(2))}>2</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(3))}>3</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(4))}>4</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(5))}>5</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(6))}>6</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(7))}>7</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(8))}>8</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(9))}>9</button>
            <button className='btn-flex' onClick={() => dispatch(deleteNumber())}>{simbol}</button>
            <button className='btn-flex'onClick={() => dispatch(addNumber(0))}>0</button>
            <button className='btn-flex' onClick={() => dispatch(checkPassword())}>E</button>
        </div>
    );
};

export default PaswordPanel;
