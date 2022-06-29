import ReactPortal from "../utils/ReactPortal";
import Modal from "../utils/Modal";
import Form from "../functionality/Form";
import Header from "../UI/Header";
import Offers from "../UI/Offers";
import BestRestaurants from "..//UI/BestRestaurants";

const Landing = (props) => {

  return (
    <>
    {props.formType === 'signin' &&
        <ReactPortal wrapperId='modal'>
            <Modal onHideModal={props.hideModal} title='Sign In'>
                <Form isLogin={true} />
            </Modal>
        </ReactPortal>
    }
        {props.formType === 'signup' &&
        <ReactPortal wrapperId='modal'>
            <Modal onHideModal={props.hideModal} title='Sign Up'>
                <Form isLogin={false} />
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