import styled from '../../../../images/style.svg'

import vite from '../../../../images/vite.svg'

import { Divider, Iedit } from './styles'

export function Tecs() {
  return (
    <>
      <Divider>
        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="icon skill"
          />
          <strong>HTML</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="icon skill"
          />
          <strong>CSS</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="icon skill"
          />
          <strong>JavaScript</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="icon skill"
          />

          <strong>TypeScript</strong>
        </Iedit>

        <Iedit>
          <img src={vite} alt="icon skill" />

          <strong>Vite.JS</strong>
        </Iedit>

        <Iedit>
          <img src={styled} alt="icon skill" />
          <strong>Styled-Components</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="icon skill"
          />

          <strong>SASS</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="icon skill"
          />

          <strong>Tailwind CSS</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="icon skill"
          />

          <strong>React</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="icon skill"
          />

          <strong>Node.JS</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="icon skill"
          />

          <strong>Figma</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="icon skill"
          />

          <strong>GIT</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="icon skill"
          />

          <strong>GitHub</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="icon skill"
          />

          <strong>Linux</strong>
        </Iedit>
        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            alt="icon skill"
          />

          <strong>PhotoShop</strong>
        </Iedit>

        <Iedit>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
            alt="icon skill"
          />

          <strong>Canva</strong>
        </Iedit>
      </Divider>
    </>
  )
}
