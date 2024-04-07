import { FaXTwitter,} from "react-icons/fa6";
import { FaTiktok,FaYoutube,FaInstagram } from "react-icons/fa";

export const SocialLinks = () => {
    return (
        <section className="mt-3">
            <h3 className="text-3xl font-extrabold text-center mt-20 mb-20">Mes réseaux sociaux</h3>

            <ul className="mt-5 mb-10 flex justify-between">
                <li><a className="hover:text-[#33E7F2] text-2xl flex" href="https://www.youtube.com/@xNeyNey"><FaYoutube className="text-4xl mr-4"/> Youtube </a></li>
                <li><a className="hover:text-[#33E7F2] text-2xl flex" href="https://www.tiktok.com/@xneyney"><FaTiktok className="text-4xl mr-4"/> TikTok</a></li>
                <li><a className="hover:text-[#33E7F2] text-2xl flex" href="https://www.instagram.com/neyney_v2v/"><FaInstagram className="text-4xl mr-4"/> Instagram</a></li>
                <li><a className="hover:text-[#33E7F2] text-2xl flex" href="https://twitter.com/xNeyNey_"><FaXTwitter className="text-4xl mr-4"/>Twitter</a></li>
            </ul>
        </section>
    )
}