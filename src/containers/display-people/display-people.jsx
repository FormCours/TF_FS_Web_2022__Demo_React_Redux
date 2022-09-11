import { useSelector } from 'react-redux';

const DisplayPeople = () => {

    const personList = useSelector(state => state.person.list);

    return (
        <ul>
            {personList.map(
                person => <li key={person.id}>{person.firstname} {person.lastname}</li>
            )}
        </ul>
    )
}

export default DisplayPeople;