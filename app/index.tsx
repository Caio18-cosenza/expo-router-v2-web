import { View, Text } from 'react-native';
import '@/styles/Home.css';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <div className='container'>
      <h1 className='title'>Home</h1>
      <Link
        href={{
          params: {},
          pathname: '/profile',
        }}
      >
        <p className='link'>Perfil</p>
      </Link>
    </div>
  );
}
