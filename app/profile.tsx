import { View, Text } from 'react-native';
import '@/styles/Profile.css';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <div className='container'>
      <h1 className='title'>Perfil</h1>
      <img
        src='https://github.com/Caio18-cosenza.png'
        alt='Imagem Caio Cosenza'
        width={150}
        height={150}
        className='image'
      />
      <span className='name'>Caio Cosenza</span>
      <p className='email'>codarmobile@gmail.com</p>
      <button
        onClick={() => {
          alert('Variáveis de ambiente: ' + process.env.EXPO_PUBLIC_SECRET_KEY);
        }}
        className='button'
      >
        Mais dados
      </button>
      <Link
        href={{
          pathname: '/',
          params: {},
        }}
        asChild
      >
        <p className='link'>Retornar para início</p>
      </Link>
    </div>
  );
}
