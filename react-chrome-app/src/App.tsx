import { useState } from 'react';
import { Button, ConfigProvider, Modal } from 'antd';
import "./App.css";

function App() {

  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
      <ConfigProvider theme={{ token: {  } }}>
        <div>
          <header>
            <Button type="primary" onClick={() => setShowLoginModal(true)}>Open Accel Plugin</Button>
          </header>
          <Modal title="Login" open={showLoginModal} closeIcon={false} onOk={() => setShowLoginModal(false)} onCancel={() => setShowLoginModal(false)} />
        </div>
    </ConfigProvider>
  );
}

export default App;
