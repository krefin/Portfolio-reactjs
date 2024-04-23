import HOL from '../assets/img/portfolio/1.png';
import Course from '../assets/img/portfolio/2.png';
import LandingPage from '../assets/img/portfolio/3.png';

const PortfolioPage = () => {
    return (
        <section id="portfolio" className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-wx-xl mx-auto text-center mb-16">
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Project
                            Terbaru</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit, amet consectetur
                            adipisicing
                            elit. Dolore facere distinctio dolorem quae
                            nobis? Aspernatur reprehenderit deleniti recusandae impedit minus?</p>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={HOL} alt="HouseOfLearning" width="w-full" />
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">House Of Learning</h3>
                        <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia esse voluptates numquam.</p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={Course} alt="WebCourse" width="w-full" />
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Web Course Reactjs + vite</h3>
                        <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia esse voluptates numquam.</p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={LandingPage} alt="LandingPage" width="w-full" />
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Landing Page</h3>
                        <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia esse voluptates numquam.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioPage