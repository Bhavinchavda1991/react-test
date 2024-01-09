import React, { useState, useEffect } from 'react';
import MasterView from './MasterView';
import DetailView from './DetailView';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app-container">
      {!isMobile && (
        <>
          <MasterView items={items} onSelectItem={handleSelectItem} />
          {selectedItem && <DetailView item={selectedItem} />}
        </>
      )}
      {isMobile && !selectedItem && (
        <MasterView items={items} onSelectItem={handleSelectItem} />
      )}
      {isMobile && selectedItem && (
        <DetailView item={selectedItem} onBack={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

export default App;