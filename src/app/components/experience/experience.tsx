import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>1 year studiyng Analitcs and Sistems Development, technologies studied to date:  HTML, CSS, JAVASCRIPT, C, C#, BOOTSTRAP e GIT.</p>
            <div className="experience-time">
                <div className="experience-language">
                <Image
                src="/html.png"
                alt="html Logo"
                width={40 }
                height={40 }
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-4">
                        <span>1 years</span>
                    </div>
                </div>
                </div>
                <div className="experience-language">
                <Image
                src="/css.png"
                alt="css Logo"
                width={40 }
                height={40 }
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-4">
                    <span>1 years</span>
                    </div>
                </div>
                </div>
                <div className="experience-language">
                <Image
                src="/js.png"
                alt="js Logo"
                width={40 }
                height={40 }
                priority
                />
                <div className="experience-unit">
                <div className="experience-measure measure-2">
                <span>6 months</span>
                </div>
                </div>
                </div>
                <div className="experience-language">
                <Image
                src="/csharp.png"
                alt="c# Logo"
                width={40 }
                height={40 }
                priority
                />
                <div className="experience-unit">
                <div className="experience-measure measure-2">
                <span>6 months</span>
                </div>
                </div>
                </div>

            </div>
        </div>
    )
}