import ReactPortal from "../utils/ReactPortal";
import Modal from "../utils/Modal";
import Form from "../functionality/Form";
import Header from "../UI/Header";
import Offers from "../UI/Offers";
import BestRestaurants from "..//UI/BestRestaurants";

import { useSelector } from "react-redux";

const Landing = () => {

    const loginRegisterFormType = useSelector(state => state.ui.loginRegisterFormType);

  return (
    <>
    {loginRegisterFormType !== '' &&
        <ReactPortal wrapperId='modal'>
            <Modal>
                <Form  />
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