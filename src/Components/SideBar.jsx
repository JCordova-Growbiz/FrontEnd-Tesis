import { MainIcon, ChatIcon, SearchIcon, CrownIcon, FolderIcon, SettingIcon, MoonIcon } from '../Assets/Icons';
import AvatarImg from "../Assets/Imgs/Avatar.png";

function Aside() {
  return (
    <nav className='sidebar'>
      <div className="sidebar-icons">
        <MainIcon/>

        <div className="sidebar-icons-sub">
          <div className="container-icon">
            <ChatIcon/>
          </div>

          <div className="container-icon">
            <SearchIcon/>
          </div>

          <div className="container-icon">
            <CrownIcon/>
          </div>

          <div className="container-icon">
            <FolderIcon/>
          </div>

          <div className="container-icon">
            <SettingIcon/>
          </div>
        </div>
      </div>
      <div className="sidebar-icons_profile">
        <div className="container-icon">
          <MoonIcon/>
        </div>
        <img src={AvatarImg} alt="" />
      </div>
    </nav>
  );
}

export default Aside;
