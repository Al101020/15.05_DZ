import MapOfGermany from './MapOfGermany/MapOfGermany';
import TVProgram from './TVProgram/TVProgram';

export default function column2() {
    return (
      <div className='column'>
        <MapOfGermany />
        <TVProgram />
      </div>
    )
  }