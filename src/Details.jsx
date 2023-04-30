import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [_, setAdoptedPet] = useContext(AdoptedPetContext);
    const {id} = useParams();
    const results = useQuery(["details", id], fetchPet) //if dont have key-value (details:1) than run fetchPet 
    
    //we have async code, but we can't await in render function like here
    //this is sync hook but fetching from async api
    //useEffect always runing, no care if we already have it, here we cash the fetch
    if(results.isLoading){
      return(
        <div className="loading-pane">
          <h2 className="loader">🐤</h2>
        </div>
      )
    }
    const pet = results.data.pets[0];
    

    return (
      <div className="details">
        <Carousel images={pet.images}/>
        <h1>{pet.name}</h1>
        <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>;
        <p>{pet.description}</p>
        {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {pet.name}?</h1>
                  <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                    >
                    Yes
                   </button>
                    <button onClick={() => setShowModal(false)}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
        }
      </div>
    )
  };

  export default function DetailsErrorBoundary(props) {
    return (
      <ErrorBoundary>
        <Details {...props} />
      </ErrorBoundary>
    );
  }
  
