import Google from '../assets/img/clients/Google_2015_logo.svg.webp';
import Gojek from '../assets/img/clients/Gojek_logo_2022.svg.png';
import Tokped from '../assets/img/clients/Tokopedia.svg.png';
import Traveloka from '../assets/img/clients/Logo_Traveloka.png';

const ClientsPage = () => {
    return (
        <section id="home" className="pt-36 pb-32 bg-slate-100 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16">
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Yang Pernah
                            Bekerjasama</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Pelanggan yang pernah kolaborasi sama saya nih! Keren banget pengalaman bekerja sama dengan mereka. Ayo, simak kisah sukses dan proyek seru yang pernah kami rancang bersama!</p>
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        <a href="#"
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={Google} alt="google" />
                        </a>
                        <a href="#"
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={Gojek} alt="gojek" />
                        </a>
                        <a href="#"
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={Tokped} alt="tokopedia" />
                        </a>
                        <a href="#"
                            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={Traveloka} alt="traveloka" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsPage