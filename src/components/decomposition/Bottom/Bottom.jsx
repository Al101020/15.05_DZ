import Column1 from './column1/Column1';

import MapOfGermany from './column2/MapOfGermany';

import Ether from './column3/Ether';

export default function Bottom() {
  return (
    <>
      <div className='bottom'>
        <Column1 />
        <div className='column'>
          <MapOfGermany />
        </div>
        <div className='column'>
          <Ether />
        </div>
      </div>
    </>
  )
}
