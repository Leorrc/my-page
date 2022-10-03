import { CardProjects } from './CardProjects'
import cardProject from '../../../utils/data/cardProject.json'
import { Cards, ContainerMaster, ContainerSection, LinkGit } from './styles'
import { FaCaretRight } from 'react-icons/fa'

export function Projects() {
  return (
    <>
      <ContainerSection>
        <ContainerMaster>
          <h2>Projetos Recentes</h2>
          <p>
            Novos desafios são sempre uma fonte de motivação para mim, por isso
            sempre gosto de ter novos projetos em andamento. Veja algumas das
            aplicações às quais dediquei meu tempo.
          </p>
          <Cards>
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
              <FaCaretRight />
              Você pode conferir outros projetos que desenvolvi no meu{' '}
              <a href="https://github.com/Leorrc" target="_blank">
                Github!
              </a>{' '}
            </p>
          </LinkGit>
        </ContainerMaster>
      </ContainerSection>
    </>
  )
}
