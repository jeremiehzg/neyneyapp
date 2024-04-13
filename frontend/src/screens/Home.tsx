import { About } from "../components/About"
import { SocialLinks } from "../components/SocialLinks"
import { YoutubeVideo } from "../components/YoutubeVideo"

export const Home = () => {
    return (
        // className="pt-16" 
        <main className="">
            <About />
            <div>
                <div><YoutubeVideo id="ZA9B5YsyyPs" /></div>
            </div>
            <SocialLinks />
        </main>
    )
}