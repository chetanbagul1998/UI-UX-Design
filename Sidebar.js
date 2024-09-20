import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaBars, FaAccusoft, FaAngleDoubleDown, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDoubleUp, FaAngleDown} from 'react-icons/fa'; 
import './Sidebar.css'; 

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar} className="hamburger">
        <FaBars />
      </button>
      <nav className="nav-links">
        <Link to="/page1">
          <FaHome />
          {!isCollapsed && <span>Page 1</span>}
        </Link>
        <Link to="/page2">
          <FaUser />
          {!isCollapsed && <span>Page 2</span>}
        </Link>
        <Link to="/page3">
          <FaAngleDoubleDown />
          {!isCollapsed && <span>Page 3</span>}
        </Link>
        <Link to="/page4">
        <FaAccusoft />
        {!isCollapsed && <span>Page 4</span>}
        </Link>
        <Link to="/page5">
          <FaAngleDoubleLeft />
          {!isCollapsed && <span>Page 5</span>}
        </Link>
        <Link to="/page6">
          <FaAngleDoubleRight />
          {!isCollapsed && <span>Page 6</span>}
        </Link>
        <Link to="/page7">
          <FaAngleDoubleUp />
          {!isCollapsed && <span>Page 7</span>}
        </Link>
        <Link to="/page8">
          <FaAngleDown />
          {!isCollapsed && <span>Page 8</span>}
        </Link>
        <Link to="/page9">
          <FaUser />
          {!isCollapsed && <span>Page 9</span>}
        </Link>
        <Link to="/page10">
          <FaCog />
          {!isCollapsed && <span>Page 10</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;


