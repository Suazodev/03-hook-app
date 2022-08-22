import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './09-useContext/MainApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <HooksApp /> */}
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <CustomHookForm /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <Layout /> */}
      {/* <Memorize /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook /> */}
      {/* <Father /> */}
      {/* <TodoApp /> */}
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);
