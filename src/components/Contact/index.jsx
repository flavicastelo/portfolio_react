
import { ContainerBodyContact, ContainerContact, ContainerIconsContact, ContainerTextContact, DescriptionContact, LinkContact, FormContainer, Input, Label, TextArea, SubmitButton, RequiredAsterisk } from './styles';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import Title from '../Title.jsx';
import useIntersectionObserver from "../../utils/animations.jsx";

export default function Contact(props) {
    const { darkMode } = props;
    const { sectionRef, isVisible } = useIntersectionObserver();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
     
        console.log(formData);
      };
    
    return (
        <ContainerContact darkMode={darkMode} id='contact' data-index="4">
            <ContainerBodyContact ref={sectionRef} isVisible={isVisible} darkMode={darkMode} >
                <ContainerTextContact>
                <Title darkMode={darkMode} titleContent="Fale Comigo" />
                    <DescriptionContact darkMode={darkMode} >Quer trabalhar junto? Ficou com alguma dúvida?<br /> Mande uma mensagem. :D </DescriptionContact>
                </ContainerTextContact>
                {/* <ContainerIconsContact>
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
                </ContainerIconsContact> */}

<FormContainer darkMode={darkMode} onSubmit={handleSubmit}>
      <Label darkMode={darkMode} htmlFor="name" required>Nome<RequiredAsterisk /></Label>
      <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      <Label darkMode={darkMode} htmlFor="email" required>Email <RequiredAsterisk /></Label>
      <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <Label darkMode={darkMode} htmlFor="message" required>Mensagem <RequiredAsterisk /></Label>
      <TextArea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required />

      <SubmitButton darkMode={darkMode} type="submit" required>ENVIAR <RequiredAsterisk /><SendIcon style={{ fontSize:'15px'}}  /></SubmitButton>
    </FormContainer>
            </ContainerBodyContact>
           
        </ContainerContact>
    );
}