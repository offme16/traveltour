import sl from './MyModal.module.css';

const MyModal = ({children, visible , setVisible}) => {
    const rootClasses = [sl.myModal];
    if(visible){
        rootClasses.push(sl.active)
    }
    return <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
        <div className={sl.myModalContent} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
}
export default MyModal;