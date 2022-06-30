import ReactPortal from "../utils/ReactPortal";
import Modal from "../utils/Modal";
import Form from "../functionality/Form";
import Header from "../UI/Header";
import Offers from "../UI/Offers";
import BestRestaurants from "..//UI/BestRestaurants";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const Landing = () => {
    const dispatch = useDispatch();

    const loginRegisterFormType = useSelector(state => state.ui.loginRegisterFormType);

    const error = useSelector(state => state.ui.loginRegisterError);

    const hideModal = () => {
        dispatch(uiActions.hideForm()); 
    }

  return (
    <>
    {loginRegisterFormType === 'signin' &&
        <ReactPortal wrapperId='modal'>
            <Modal onHideModal={hideModal} title='Sign In'>
                <Form isLogin={true} error={error}/>
            </Modal>
        </ReactPortal>
    }
        {loginRegisterFormType === 'signup' &&
        <ReactPortal wrapperId='modal'>
            <Modal onHideModal={hideModal} title='Sign Up'>
                <Form isLogin={false} error={error} />
            </Modal>
        </ReactPortal>
    }   
        <Header />
        <Offers />
        <BestRestaurants />
    </>
  )
}

export default Landing