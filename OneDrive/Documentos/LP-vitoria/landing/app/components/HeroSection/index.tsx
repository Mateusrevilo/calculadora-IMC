import type { Hero } from "@/app/types/heros/Hero"


type Props = {
    hero: Hero
}



const HeroSection = ({ hero }: Props) => {
    return (
        <section>
            <div>
                <h1>{hero.title}</h1>
                <p>{hero.subtitle}</p>
                <button>{hero.btnText}</button>
            </div>
        </section>

    )

}

export default HeroSection