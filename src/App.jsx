import React from 'react'
import List from './Conponnents/List'
import Button from './Conponnents/Button'
import Container from './Conponnents/Container'
import Flex from './Conponnents/Flex'

import ImageBanner from './assets/gil.jpg'
import Image from './Conponnents/Image'
import Navber from './layouts/Navber'
import Banner from './layouts/Banner'
import Service from './layouts/Service'


const App = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      <Service/>

    </div>
  )
}
export default App