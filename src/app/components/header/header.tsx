import Image from 'next/image'
import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i'm Thiago! </h1>
            <h2>Analysis and Systems Development</h2>
          </div>
          <Image
            src="/foto1.jpeg"
            alt="Next.js Logo"
            width={322}
            height={290}
            priority
          />
        </div>
    )


}