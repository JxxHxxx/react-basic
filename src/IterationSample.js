import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });

        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('') // inputText 를 비운다.
    }
    /**
     상태 안에서 배열을 변형할 때는 배열에 직접 접근하는 것이 아니라 
     배열 내장 함수를 통해 새로운 배열을 만드는게 중요
     **/
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id); 
        setNames(nextNames);
    }

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ))

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );


};

export default IterationSample;