import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ContainerDarkMode, Btn } from './styles';
import { useState } from 'react';

export default function ButtonDarkMode(props) {
    const { darkMode, toggleDarkMode } = props;
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
      toggleDarkMode();
    };

    return (
        <ContainerDarkMode>
              <Btn className={isActive ? 'active' : ''} onClick={handleClick}>
      {darkMode ? (
        <DarkModeIcon className="icon" />
      ) : (
        <WbSunnyIcon className="icon" />
      )}
    </Btn>
            {/* {darkMode ? (
                <WbSunnyIcon
                    style={{ color: '#DA5866', cursor: 'pointer', fontSize: '50px' }}
                    onClick={toggleDarkMode}
                />
            ) : (
                <DarkModeIcon
                    style={{ color: 'black', cursor: 'pointer' , fontSize: '50px' }}
                    onClick={toggleDarkMode}
                />
            )} */}
        </ContainerDarkMode>

    );

}