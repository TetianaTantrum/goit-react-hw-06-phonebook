// // without redux persist

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import { store } from './redux/store';
// import { Provider } from 'react-redux';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

//persist doesn`t work

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);

// with rootContainer. also doesn`t work

// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
// import { App } from 'components/App';
// import { store, persistor } from './redux/store';
// import { Provider } from 'react-redux';
// import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
