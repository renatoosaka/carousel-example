import { Carousel } from './components/Carousel'

const IMAGES_URL = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1587471384749-6d25c9944c5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1538131052268-1af52c1db73d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1550757627-155698319664?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  }, 
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1550408483-bafa35b0a433?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1337&q=80'
  }
]

function App() {
  return (
    <div>
      App
      <Carousel images={IMAGES_URL} />
    </div>
  );
}

export default App;
