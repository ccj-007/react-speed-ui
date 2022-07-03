import React from 'react';
import './App.css';
import './styles/index.scss'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    < div className="App" >
      <Menu mode='vertical' onSelect={(index) => console.log(index)} >
        <MenuItem >标签1</MenuItem>
        <MenuItem>标签2</MenuItem>
        <MenuItem>标签3</MenuItem>
        <SubMenu title='标签4'>
          <MenuItem >标签1</MenuItem>
          <MenuItem>标签2</MenuItem>
          <MenuItem>标签3</MenuItem>
        </SubMenu>
      </Menu>
    </ div >
  );
}

export default App;
