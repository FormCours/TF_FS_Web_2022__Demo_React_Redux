import { useId } from 'react';
import { useForm } from 'react-hook-form'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchAge } from '../../store/actions/request-age-action';

const AgePredictor = () => {

    const id = useId();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            firstname: ''
        }
    });
    const dispatch = useDispatch();
    const request = useSelector(state => state.age);

    const handleSearch = (data) => {
        dispatch(fetchAge(data.firstname));
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleSearch)}>
                <label htmlFor={id+'_name'}>Nom :</label>
                <input id={id+'_name'} type="text" {...register('firstname')} />
            </form>
            
            <div>
                {request.isLoading ? (
                    <span>Loading...</span>
                ) : request.error ? (
                    <span>Une erreur s'est produite : {request.error}</span>
                ) : request.data && (
                    <span>L'age moyen de "{request.data.name}" est de {request.data.age || 'Inconnu'}</span>
                )} 
            </div>
        </>
    )
}

export default AgePredictor;