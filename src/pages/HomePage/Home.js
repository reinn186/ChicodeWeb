import React from 'react';
import { homeObjOne } from './Data';
import { InfoSection, Pricing, About , Project} from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <About/>
      <Pricing />
      <Project/>
    </>
  );
}

export default Home;
