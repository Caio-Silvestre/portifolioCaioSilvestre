// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portifolioCaioSilvestre`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, seja bem-vindo ao portifólio de {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            Desenvolvendo{" "}
              <Text as="span" type="heading1" color="brand1">
                soluções 
              </Text>{" "}
              de forma{" "}
              <Text as="span" type="heading1" color="brand1">
              criativa e eficaz
              </Text>{" "}
              
            </Text>
            <Text type="body1" color="grey2">
            Sou graduado em Publicidade e Propaganda pela PUC-PR, e sempre atuei na área criativa como designer por ser atraído pela tecnologia. Após dois anos de atuação, tomei a decisão de estudar Front-End, e por consequência, me aprofundei na área da Tecnologia. Assim, iniciei um novo ciclo de transição de carreira e me formei na Kenzie Academy Brasil, no curso pessoa Desenvolvedor  Full-Stack.<br></br> 
Jornada onde aprendi o que é ser um desenvolvedor; dominei tecnologias de Front-End, Back-End e me apaixonei pelos frameworks, estrutura das linguagens, e a prática de "clean code". Atualmente meu objetivo é um cargo como desenvolvedor Full-Stack, onde eu possa contribuir para empresa.

            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Código do Portfólio 
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Projetos{" "}
                <Text as="span" color="brand5">
                  pessoais, com status públicos no GitHub.
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
