

const BlogPage = () => {
    return (
        <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-dark">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-wx-xl mx-auto text-center mb-16">
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Tulisan
                            Terkini</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Maxime blanditiis aliquid hic repellendus.</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                                <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full" />
                                <div className="py-8 px-6">
                                    <h3>
                                        <a href="/tips"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Mengasah Keterampilan Pemrograman: Tips dan Strategi Efektif</a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-6">Pemrograman, dalam era digital saat ini, telah menjadi salah satu keterampilan yang sangat dicari di berbagai industri.</p>
                                    <a href="/tips"
                                        className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca
                                        Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                                <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Mechanical keyboard"
                                    className="w-full" />
                                <div className="py-8 px-6">
                                    <h3>
                                        <a href="/review"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Review
                                            Keyboard Redragon K-617 RGB</a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-6">Keberadaan keyboard yang berkualitas menjadi sangat penting bagi para pengguna komputer, baik untuk keperluan gaming maupun produktivitas sehari-hari. </p>
                                    <a href="/review"
                                        className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca
                                        Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                                <img src="https://source.unsplash.com/360x200?cup+coffee" alt="coffee" className="w-full" />
                                <div className="py-8 px-6">
                                    <h3>
                                        <a href="/kopi"
                                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Menemukan Keindahan di Setiap Tetes Kopi: Seni dan Kesenangan dalam Secangkir Kopi</a>
                                    </h3>
                                    <p className="font-medium text-base text-secondary mb-6">Kopi telah menjadi minuman yang tidak hanya sekadar penghilang kantuk, tetapi juga simbol dari seni dan kesenangan dalam hidup sehari-hari. </p>
                                    <a href="/kopi"
                                        className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca
                                        Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPage