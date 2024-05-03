

const ContactPage = () => {
    return (
        <section id="home" className="pt-36 pb-32 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-wx-xl mx-auto text-center mb-16">
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Hubungi Saya
                        </h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Jangan ragu untuk menghubungi saya! Mari berkolaborasi atau diskusikan proyek Anda bersama saya. Saya sangat antusias untuk mendengar dari Anda dan bekerja sama dalam menciptakan sesuatu yang luar biasa!</p>
                    </div>
                </div>
                <form>
                    <div className="w-full lg:w-2/3 lg:mx-auto">

                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base font-bold text-primary">Nama</label>
                            <input type="text" id="name"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
                            <input type="email" id="email"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="message" className="text-base font-bold text-primary">Pesan</label>
                            <textarea type="text" id="message"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
                        </div>
                        <div className="w-full px-4">
                            <button
                                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactPage