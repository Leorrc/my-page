import img from '../../../images/1.png'
import { FaCode, FaCss3, FaHtml5 } from 'react-icons/fa'
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTypescript
} from 'react-icons/si'

import { Divider } from './styles'

export function Tecs() {
  return (
    <>
      <Divider>
        <i className="html">
          <FaHtml5 />
        </i>
        <i className="css">
          <FaCss3 />
        </i>
        <i className="sass">
          <SiSass />
        </i>
        <i className="script">
          <SiJavascript />
        </i>
        <i className="ts">
          <SiTypescript />
        </i>
        <i className="react">
          <SiReact />
        </i>
        <i className="node">
          <SiNodedotjs />
        </i>
        <i className="hub">
          <SiGithub />
        </i>
        <i className="git">
          <SiGit />
        </i>
      </Divider>
    </>
  )
}
