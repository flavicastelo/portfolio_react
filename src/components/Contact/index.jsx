
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { ContainerBodyContact, ContainerContact, ContainerIconsContact, ContainerTextContact, DescriptionContact, LinkContact, TitleContact } from './styles';


export default function Contact(props) {
    const { darkMode } = props;
    return (
        <ContainerContact darkMode={darkMode} id='contact'>
            <ContainerBodyContact>
                <ContainerTextContact>
                    <TitleContact>Vamos trabalhar juntos?</TitleContact>
                    <DescriptionContact darkMode={darkMode} >Entre em contato!</DescriptionContact>
                </ContainerTextContact>
                <ContainerIconsContact>
                    <LinkContact target='_blank' href='https://github.com/flavicastelo'>
                        <GitHubIcon  style={{color: '#DA5866', fontSize:'100px'}}/>
                    </LinkContact>
                    <LinkContact target='_blank' href="https://wa.me/5585986189096?text=Vi+seu+portf%C3%B3lio+e+gostaria+de+entrar+em+contato%21">
                   
                        <WhatsAppIcon style={{color: '#DA5866', fontSize:'100px'}}/>
                    </LinkContact>
                  <LinkContact target='_blank' href="https://www.linkedin.com/in/flavianacastelo/">
                        <LinkedInIcon style={{color: '#DA5866', fontSize:'100px'}}/>
                    </LinkContact>
                    <LinkContact target='_blank' href="mailto:flavicastelocc@gmail.com"
                    >
                        <EmailIcon style={{color: '#DA5866', fontSize:'100px'}} />
                    </LinkContact>
                </ContainerIconsContact>
            </ContainerBodyContact>

        </ContainerContact>
    );
}