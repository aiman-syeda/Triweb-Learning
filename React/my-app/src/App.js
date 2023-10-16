import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/Backdrop";
import {useState} from "react"; 


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalCloseHandler = () => {
    setModalOpen(false);
  }

  const modalOpenHandler = () => {
    setModalOpen(true);
  }


  return (
    <div >
      <h1>React Intro</h1>
      {modalOpen?<FirstComponent name = "Anaya" topic = "Real Numbers" sub = "Maths" closeModal={modalCloseHandler}/>:null}
      {modalOpen?<Backdrop/>:null}
      <button onClick={modalOpenHandler}>Open modal</button>
    </div>
  );
}

export default App;
