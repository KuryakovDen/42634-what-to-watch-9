import { Triangle } from  'react-loader-spinner';

function Loader(): JSX.Element {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'linear-gradient(-180deg,#180202 0,#000 100%)'}}>
      <Triangle
        height='180'
        width='180'
        color='white'
        ariaLabel='loading'
      />
    </div>
  );
}

export default Loader;
