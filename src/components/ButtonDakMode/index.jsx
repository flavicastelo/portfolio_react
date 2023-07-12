import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ContainerDarkMode } from './styles';

export default function ButtonDarkMode(props) {
    const { darkMode, toggleDarkMode } = props;
    return (
        <ContainerDarkMode>
            {darkMode ? (
                <WbSunnyIcon
                    style={{ color: '#DA5866', cursor: 'pointer', fontSize: '50px' }}
                    onClick={toggleDarkMode}
                />
            ) : (
                <DarkModeIcon
                    style={{ color: 'black', cursor: 'pointer' , fontSize: '50px' }}
                    onClick={toggleDarkMode}
                />
            )}
        </ContainerDarkMode>

    );

}