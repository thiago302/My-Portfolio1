import { LinkedinIcon } from '../icons/linkedin'
import { GithubIcon } from '../icons/github-icon'

import "./social-btns.scss"




export function SocialBtns(){
    return(
        <div className="social">
            
            <a target='blank' href="https://www.linkedin.com/in/thiago-vieira-rodrigues-9824b3201/"><LinkedinIcon/></a>
            <a target='blank' href="https://github.com/thiago302"><GithubIcon/></a>
            
        </div>
    )
}