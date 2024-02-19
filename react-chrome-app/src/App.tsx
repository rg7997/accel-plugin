import { Button, ConfigProvider } from 'antd';
import "./App.css";

function App() {

  return (
      <ConfigProvider theme={{ token: {  } }}>

    <div>
      <header>
        <h2 className='text-green-500 mt-4'>Hello From Accel Plugin 1👋</h2>
        <Button type="primary" onClick={() => alert('Open')}>Open Accel Plugin</Button>
      </header>
    </div>
    </ConfigProvider>
  );
}

export default App;
