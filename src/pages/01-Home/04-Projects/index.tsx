import { CardProjects } from './CardProjects'
import cardProject from '../../../utils/data/cardProject.json'
import {
  Cards,
  ContainerMaster,
  ContainerSection,
  DivText,
  LinkGit
} from './styles'

export function Projects() {
  return (
    <>
      <ContainerSection id="IdProject">
        <ContainerMaster data-aos="fade-right">
          <DivText>
            <h2>Projetos Recentes</h2>
            <p>
              Novos desafios são sempre uma fonte de motivação para mim, por
              isso sempre gosto de ter novos projetos em andamento. Veja algumas
              das aplicações às quais dediquei meu tempo.
            </p>
          </DivText>
          <Cards data-aos="slide-up">
            {cardProject.map(content => (
              <CardProjects
                imgUrl={content.imgUrl}
                name={content.name}
                description={content.description}
                socialList={content.socialList}
              />
            ))}
          </Cards>

          <LinkGit>
            <p>
              Você pode conferir outros projetos que desenvolvi no meu{' '}
              <a
                href="https://github.com/Leorrc"
                target="_blank"
                rel="noreferrer"
              >
                Github!
              </a>
            </p>
          </LinkGit>
        </ContainerMaster>
      </ContainerSection>
    </>
  )
}
