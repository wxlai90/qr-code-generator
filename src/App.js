import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import styled from 'styled-components';


const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  & input {
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;

    &:focus {
      border-bottom: 2px solid rgb(25, 108, 175);
    }

    @media only screen and (max-width: 768px){
      max-width: 90vw;
    }
  }
`;

const QRContainer = styled.div`
  display: inline-block;
  text-align: center;
  max-width: 50vw;
  word-break: break-all;
`;

const App = () => {
  const [data, setData] = useState('');
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, data, { errorCorrectionLevel: 'H' }, (err) => {
      if (err) console.log(err);
    });
  }, [data]);

  return (
    <Section>
      <form>
        <label>
          <input type="text" value={data} onChange={({ target: { value } }) => setData(value)} />
        </label>
      </form>

      <QRContainer>
        <canvas ref={canvasRef} />
        <h3>{data}</h3>
      </QRContainer>
    </Section>
  );
};

export default App;
