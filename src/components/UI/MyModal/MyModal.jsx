import { useDispatch } from 'react-redux';
import sl from './MyModal.module.css';
import { bookActions } from '../../../store/bookSlice';

const MyModal = ({children, visible , setVisible}) => {
    const dispatch = useDispatch();
    const rootClasses = [sl.myModal];
    if(visible){
        rootClasses.push(sl.active)
    }

    const cleaningState = () => {
        setVisible(false);
        dispatch(bookActions.clearState())
    }

    return <div className={rootClasses.join(" ")} onClick={() => cleaningState()}>
        <div className={sl.myModalContent} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
}
export default MyModal;