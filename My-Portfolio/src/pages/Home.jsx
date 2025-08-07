import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import backgroundImage from '../assets/images/new-background.png'

function Home() {  return (
    <>
      <Navbar />
      <Hero />
      <style>
        {`
          body {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
        `}
      </style>
    </>
  )
} 

export default Home;