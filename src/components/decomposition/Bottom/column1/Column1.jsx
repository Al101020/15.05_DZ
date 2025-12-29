import Weather from './Weather/Weather';
import Attendance from './Attendance/Attendance';

export default function column1() {
    return (
      <div className='column'>
        <Weather />
        <Attendance />
      </div>
    )
  }