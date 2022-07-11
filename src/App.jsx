import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
const [url, setUrl] = useState('')
const [qrCode, setQRCode] = useState('')
const GenerateQRCode = () => {
  QRCode.toDataURL(url, {
    width: 800,
    margin: 2,
    color: {
      dark: '#000000ff',
      light: '#ffffffff'  
    }
  }, (err, url) => {
    if (err) return console.error(err)
    setQRCode(url)
  })
}

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input 
        type="text" 
        placeholder="e.g. http://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)} />
      <button onClick={GenerateQRCode}>
        Generate
      </button>
      {qrCode && <>
        <img src={qrCode}/>
        <a href = {qrCode} download ="qrcode.png">Download</a>
      </>}
    </div>
  )
}

export default App
