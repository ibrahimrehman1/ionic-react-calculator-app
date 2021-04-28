import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from "react";
import {closeSharp, closeCircle, addOutline, removeOutline, reorderTwo} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [currentState, changeState] = useState<string>("");
  const arithmeticOperators = ["+", "-", "*", "/", "%"];

  const updateState = (val:string) =>{
      let status = !((val == "+" || val == "-" || val == "*" || val == "/" || val == "%") && currentState.length == 0);
      let status2 = true;
      if (val == "+" || val == "-" || val == "*" || val == "/" || val == "%"){
        status2 = !(arithmeticOperators.includes(currentState.substring(currentState.length-1)));
      }
      if (status && status2){
        changeState(currentState + val);
      }
  }

  const resetState = () =>{
    changeState("");
  }

  const removeOne = () =>{
    let length:number = currentState.length - 1;
    changeState(currentState.substring(0, length))
  }

  const showResult = () =>{
    if (currentState.length){
      if (!(arithmeticOperators.includes(currentState.substring(currentState.length-1)))){
      let result:string = eval(currentState).toString();
      changeState(result);
    }
  }
    
  }



  return(
    <IonApp>
      <IonHeader style={{textAlign: "center"}}>
        <IonToolbar color="medium">
          <IonTitle>
            <h1>
              Calculator App
            </h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonInput type="text" style={{fontSize: "3rem", marginTop: "50px"}} value={currentState} readonly></IonInput>
          </IonRow>
          <IonRow className="grid-row">
            <IonCol>
              <IonButton size="large" className="btn" onClick={resetState} color="medium">C</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("/")} color="medium">&divide;</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("*")} color="medium">
                <IonIcon icon={closeSharp}></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={removeOne} color="medium">
                <IonIcon icon={closeCircle}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("7")} color="light">7</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("8")} color="light">8</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("9")} color="light">9</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("-")} color="medium">
                <IonIcon icon={removeOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("4")} color="light">4</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("5")} color="light">5</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("6")} color="light">6</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("+")} color="medium">
                <IonIcon icon={addOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("1")} color="light">1</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("2")} color="light">2</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={()=>updateState("3")} color="light">3</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large" className="btn" onClick={showResult} color="medium">
                <IonIcon icon={reorderTwo}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton size="large" className="btn" onClick={()=>updateState("%")} color="medium">%</IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton size="large" className="btn" color="light">0</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton size="large" className="btn" onClick={()=>updateState(".")} color="medium"><strong>.</strong></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  )
  };

export default App;
