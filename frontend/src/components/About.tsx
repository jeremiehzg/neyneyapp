export const About = () => {
    return (
        <section className="mb-5" style={{ height: `calc(100vh - 40px)` }}>
            <div className="flex justify-center" style={{ height: `inherit` }}>
                <div>
                    <img src="/images/neyneyprofil.png" alt="" className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-extrabold">NeyNey</h1>
                    <p className="mt-5">Bienvenue !<br /> Je suis Geoffrey, aussi connu sous le pseudonyme « NeyNey ».<br /> Découvrez tout ce qu'il y a à savoir sur moi : retrouvez mes lives sur Twitch, mes dernières vidéos sur YouTube, et suivez-moi sur mes réseaux sociaux.<br /> Rejoignez-moi et devenons une communauté de Gitan!</p>
                    <a href="https://www.youtube.com/watch?v=lj-KSQ9J1Bs" style={{ color: `red` }}> Deviens un vrai Gitan</a>
                </div>
            </div>
        </section >
    )
}