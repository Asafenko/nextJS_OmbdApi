import {useCallback} from 'react';

export default function FilmInput({name, setName}) {
    const handleNameChange = useCallback((event) => {
        const name = event.currentTarget.value;
        setName(name);
    }, []);
    return <input value={name} onInput={handleNameChange } />
}