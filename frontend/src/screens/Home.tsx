import { About } from "../components/About"
import { YoutubeVideo } from "../components/YoutubeVideo"
import { SocialLinks } from "../components/SocialLinks"

export const Home = () => {
    return (
        <main>
            <About/>
            <div className = "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-stretch">
                <div><YoutubeVideo id="ZA9B5YsyyPs"/></div>
                <div><YoutubeVideo id="3W2SE4vkE5M"/></div>
                <div><YoutubeVideo id="3W2SE4vkE5M"/></div>
                <div><YoutubeVideo id="3W2SE4vkE5M"/></div>
                <div><YoutubeVideo id="3W2SE4vkE5M"/></div>
                <div><YoutubeVideo id="3W2SE4vkE5M"/></div>
            </div>
            <SocialLinks/>
      </main>
    )
}