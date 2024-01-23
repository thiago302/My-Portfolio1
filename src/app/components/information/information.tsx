import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

interface InfoProps{
    text: string
}

export function Info(){
    return(
        <div className="infos">
        
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span><Image
            src="/us.png"
            alt="Estados Unidos Logo"
            width={24}
            height={24}
            priority
          />EN - Intermediary</span>
          <span><Image
            src="/br.png"
            alt="Brasil Logo"
            width={24}
            height={24}
            priority
          />PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
        
        <span> <Image
            src="/chapeu.png"
            alt="Chapéu Logo"
            width={24}
            height={24}
            priority
          />Analysis and Systems Development<br></br> Technologist degree -<br></br> Universidade Nove de Julho</span>
        </div>
      </div>

    )
}