import uniqid from 'uniqid';

export default function NewsUl(props) {
  let i = 0;
  const arrayLiPng = [
    './src/components/decomposition/img/li0.png',
    './src/components/decomposition/img/li1.png',
    './src/components/decomposition/img/li2.png',
    './src/components/decomposition/img/li3.png',
    './src/components/decomposition/img/li4.png'
  ];

  const arrayLi = props.props;
  const newArrayLi = arrayLi.map((elemli) => {
    return (
      <li className='newsLi' key={uniqid()}>
        <img className='newsLiImg' src={arrayLiPng[i ++]} alt='Li'/>
        <p className='newsLiP'>{elemli}</p>
      </li>
    )
  });

  return (
    <>
      <ul className='newsUl'>
        {newArrayLi}
      </ul>
    </>
  )
}
