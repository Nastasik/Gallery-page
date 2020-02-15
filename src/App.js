import React from 'react';
import './App.css';
import Header from './components/Header';
import GalleryComponent from './components/GalleryComponent/GalleryComponent';
import GalleryComponent__Images from './components/GalleryComponent/GalleryComponent__Images';
import GalleryComponent__Indicators from './components/GalleryComponent/GalleryComponent__Indicators';
import GalleryComponent__BtnsPanel from './components/GalleryComponent/GalleryComponent__BtnsPanel';
import GridComponent from './components/GridComponent/GridComponent';
import Footer from './components/Footer';
import Form from './components/Form/Form';
import AuthProvider from './components/AuthProvider';

const App = () => {
    console.count('App');

    return (
      <div className="App">
          <Header/>
          <div className="content-container">
            <AuthProvider>
                <GalleryComponent>
                    <GalleryComponent__Images/>
                    <GalleryComponent__BtnsPanel>
                        <GalleryComponent__Indicators/>
                    </GalleryComponent__BtnsPanel>
                </GalleryComponent>
            </AuthProvider>
            <GridComponent/>
            <AuthProvider>
                <Form/>
            </AuthProvider>
          </div>
          <Footer/>
      </div>
    );
}

export default App;
