import { useDispatch } from "react-redux";
import { addPerson } from "../../store/actions/person-action";

const FormPeople = () => {

    const dispatch = useDispatch();

    const handleAddPerson = () => {
        // TODO ↓ Replace by form
        const data = {
            firstname: 'Minnie',
            lastname: 'Mouse'
        };

        // Envoi l'action dans le dispatcher de redux
        dispatch(addPerson(data));
    }

    return (
        <>
            <p>TODO Ajouter un form !!!</p>

            <button onClick={handleAddPerson}>Add</button>
        </>
    )
}

export default FormPeople;