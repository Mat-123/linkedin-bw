import { FETCH_OTHER_PROFILE } from "../actions";

const initialState = {
  other: [], // qui dentro andranno a finire il profilo recuperati dalla fetch a
};

const fetchOtherProfile = function (state = initialState, action) {
  // "state" al primo avvio dell'app sarà undefined, perchè l'applicativo si è appena caricato
  // nel caso state sia undefined, gli diamo come valore di default "initialState"
  // il reducer è il CUORE di Redux
  // si tratta di una funzione PURA, ovvero di una funzione che non muta MAI i propri parametri,
  // NON effettua nessun'operazione verso l'esterno (es. fetch) e che fornita dello stesso INPUT
  // restituisce sempre lo stesso OUTPUT

  switch (action.type) {
    // ora che abbiamo cominciato a "dispatchare" le azioni, è necessario ISTRUIRE il nostro reducer
    // sul cosa fare quando le intercetta!

    // l'unica cosa che manca è riempire la proprietà "available" nello slice di book,
    // gestendo l'azione di type "GET_BOOKS"

    case FETCH_OTHER_PROFILE:
      return {
        ...state,
        other: action.payload,
      };

    default:
      // il default entra in gioco quando i "case" precedenti non vengono attivati
      // il default come tutti i case deve RITORNARE il nuovo stato dell'applicativo
      return state;
    // nel caso del default il nuovo stato è UGUALE a quello vecchio! per non fare danni...
    // NON dovete ritornare {}, null, undefined
  }
};
export default fetchOtherProfile