import { NavLink } from "react-router-dom";


const HeaderComponent = () => {
    // navbar fixed
    window.onscroll = function () {
        const header = document.querySelector("header");
        const fixedNav = header.offsetTop;
        if (window.pageYOffset > fixedNav) {
            header.classList.add("navbar-fixed");
        } else {
            header.classList.remove("navbar-fixed");
        }
    };

    // hamburger
    function toggleMenu() {
        const hamburger = document.querySelector("#hamburger");
        const navMenu = document.querySelector("#nav-menu");
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
    }
    // klik diluar
    window.addEventListener('click', function (e) {
        const hamburger = document.querySelector("#hamburger");
        const navMenu = document.querySelector("#nav-menu");
        if (e.target != hamburger && e.target != navMenu) {
            hamburger.classList.remove('hamburger-active');
            navMenu.classList.add('hidden');
        }
    });

    // darkmode
    function handleChange(e) {
        let darkToggle = e.target.checked;
        const html = document.querySelector("html");
        if (darkToggle) {
            html.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            html.classList.remove('dark');
            localStorage.theme = 'light';
        }

        // Pindahkan posisi toggle sesuai toggle mode
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            darkToggle = true;
        } else {
            darkToggle = false;
        }

    }





    return (
        <>
            <header className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10">
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a href="#home" className="font-bold text-lg text-primary block py-6">Alfin</a>
                        </div>
                        <div className="flex items-center px-4">
                            <button id="hamburger" name="hamburger" type="button" onClick={toggleMenu} className="block absolute right-4 lg:hidden">
                                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                            </button>
                            <nav id="nav-menu"
                                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent">
                                <ul className="block lg:flex">
                                    <li className="group">
                                        <NavLink
                                            to="/"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white" : isActive ? "text-base text-primary py-2 mx-8 flex group-hover:text-primary dark:text-primary" : "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                                            }
                                        >
                                            Beranda
                                        </NavLink>

                                    </li>
                                    <li className="group">
                                        <NavLink
                                            to="/tentang"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white" : isActive ? "text-base text-primary py-2 mx-8 flex group-hover:text-primary dark:text-primary" : "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                                            }
                                        >
                                            Tentang
                                            Saya
                                        </NavLink>

                                    </li>
                                    <li className="group">
                                        <NavLink
                                            to="/portfolio"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white" : isActive ? "text-base text-primary py-2 mx-8 flex group-hover:text-primary dark:text-primary" : "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                                            }
                                        >
                                            Portfolio
                                        </NavLink>
                                    </li>
                                    <li className="group">
                                        <NavLink
                                            to="/clients"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white" : isActive ? "text-base text-primary py-2 mx-8 flex group-hover:text-primary dark:text-primary" : "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                                            }
                                        >
                                            Clients
                                        </NavLink>
                                    </li>
                                    <li className="group">
                                        <NavLink
                                            to="/blog"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white" : isActive ? "text-base text-primary py-2 mx-8 flex group-hover:text-primary dark:text-primary" : "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                                            }
                                        >
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li className="group">
                                        <NavLink
                                            to="/contact"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white" : isActive ? "text-base text-primary py-2 mx-8 flex group-hover:text-primary dark:text-primary" : "text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                                            }
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li className="flex items-center pl-8 mt-3 lg:mt-0">
                                        <div className="flex">
                                            <span className="mr-2 text-sm text-slate-500">light</span>
                                            <input type="checkbox" className="hidden" onChange={handleChange} id="dark-toggle" />
                                            <label htmlFor="dark-toggle">
                                                <div
                                                    className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                                                    <div
                                                        className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out">
                                                    </div>
                                                </div>
                                            </label>
                                            <span className="ml-2 text-sm text-slate-500">dark</span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default HeaderComponent