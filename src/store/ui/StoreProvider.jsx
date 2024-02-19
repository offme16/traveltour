import { Provider } from "react-redux"
import { createRootStore } from ".."

export const StoreProvider = (props) => {
    const store = createRootStore(props.initialState)
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}