import React from 'react';
import { homeObjOne } from './Data';
import { InfoSection, Pricing, About } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <About/>
      <Pricing />
    </>
  );
}

export default Home;
