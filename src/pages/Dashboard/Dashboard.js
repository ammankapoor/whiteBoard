import React,{useState} from 'react';
import './Dashboard.css';

import TopMenu from '../../components/TopMenu/TopMenu';
import Menu from '../../components/Menu/Menu';
import DrawingScreen from '../../components/DrawingScreen/DrawingScreen';

function Dashboard() {
  const [openMenu, setOpenMenu] = useState(true);
  const [savedScreen, setSavedScreen] = useState([]); 
  const [selectedImg, setSelectedImg] = useState(null);
  const [lineWidth, setLineWidth] = useState(1);
  const [lineColor, setLineColor] = useState("black");
  const [current, setCurrent] = useState("pencil");

  console.log(selectedImg);
  return (
    <div>
      {openMenu && <TopMenu savedScreen={savedScreen} setSelectedImg={setSelectedImg} />}
      <div className='flex main-container'>
      <div className="btn" onClick={()=>setOpenMenu(!openMenu)}>{openMenu ? 'Close Menu' : 'Change Canvas' }</div>
        <div className="menu-bar">
        <Menu setCurrent={setCurrent} current={current} setLineWidth={setLineWidth} setLineColor={setLineColor} />
        </div>
      </div>
      <div className="divider"/>
        <DrawingScreen lineWidth={lineWidth} current={current} lineColor={lineColor} selectedImg={selectedImg} setSelectedImg={setSelectedImg} savedScreen={savedScreen} setSavedScreen={setSavedScreen} />
    </div>
  );
}

export default Dashboard;
