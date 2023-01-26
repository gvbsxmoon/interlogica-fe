# interlogica-fe

## TECNOLOGIE UTILIZZATE

La base del progetto è in React JS.
Babel, Vite ed ESlint, con configurazioni non troppo particolari, sono alla base.
Per lo scaffolding del design si è utilizzato l' [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/) cercando di ridurre il più possibile 
il numero di parametri da passare in input ai componenti (idealmente 0). Questo permetterebbe una fase di testing più veloce.
Styled components e react-icons per la parte di stile, AXIOS come http client per gestire più elegantemente le chiamate a servizi esterni.
react-router-dom per la parte di routing utilizzato nella maniera più semplice possibile. 

## ERRORI CONOSCIUTI
Il progetto è stato realizzato nel minor tempo possibile cercando un approccio veloce e funziona seppur non elegante tutte le volte.
Alcune parti del codice risulteranno rindondanti (vedi es. Container presente in ogni componente) ed altre non altamente interlegibili (es. Product.Update.jsx).

# RUN
**Prima di proseguire con quanto segue si consiglia di avere gia in running il [backend](https://github.com/gvbsxmoon/interlogica-be)**

Si presuppone di aver già disponibili nodejs ed npm e che la versione di node sia 17+ per evitare problemi di compatibilità. Yarn sarebbe una scelta gradita.

Per far partire il progetto in locale:

`npm install` oppure `yarn`

`npm run dev` oppure `yarn dev`

al termine del processo il terminale restituirà il link locale presso il quale l'app sara disponibile.
