import { Link } from "react-router-dom";
import PriceCard from "../components/PriceCard";
import HeroIllustration from "../components/svg/Hero";
import AboutIllustration from "../components/svg/About";
import BottomClipPath from "../components/svg/BottomClipPath";
import TopClipPath from "../components/svg/TopClipPath";
import SocialIllustration from "../components/svg/Social";
import { useEffect, useState } from "react";

function Home() {
    const [navbarColor, setNavbarColor] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarColor('bg-white bg-opacity-30 backdrop-blur-md border-b border-white/10 shadow-lg'); // Change to bg-white when scrolling down
            } else {
                setNavbarColor('transparent'); // Transparent when at top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="">
            <nav className={`fixed w-full z-10 transition-colors duration-300 ease-in-out ${navbarColor}`} >
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                    <a href="/" className="text-xl md:text-2xl font-bold text-blue-900">KeDA ERP</a>

                    <div className="space-x-4 md:space-x-6">
                        <a href="#about" className="text-sm md:text-base text-gray-700 px-2 hover:text-blue-500">About</a>
                        <a href="#pricing" className="text-sm md:text-base text-gray-700 px-2 hover:text-blue-500">Pricing</a>
                        <a href="#contact" className="text-sm md:text-base text-gray-700 px-2 hover:text-blue-500">Contact</a>

                        <Link to="login"
                            className="text-sm md:text-base text-blue-500 border border-blue-500 px-10 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>


            <section className="relative w-full max-h-min bg-blue-200/20  text-white py-16 md:py-20 lg:py-24 mt-0">
                <div className="absolute w-1/3 h-1/3 -top-56 flex">
                    <TopClipPath />
                </div>
                <div className="absolute bottom-0 flex overflow-hidden justify-end" style={{ width: 'inherit', height: 'inherit' }} >
                    <BottomClipPath />
                </div>


                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-right font-bold text-blue-900 mb-4">Optimize Your Business with Our ERP System</h1>
                    <p className="text-lg md:text-xl text-blue-900/80 text-right mb-16">Streamline operations, increase efficiency, and boost profitability.</p>
                    <p className="text-lg md:text-xl text-blue-900/80 text-left">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="w-1/3 h-1/3 md:w-[40%] md:h-[40%] flex">
                        <HeroIllustration />
                    </div>
                </div>
            </section>


            <section id="about" className="py-16 md:py-20 lg:py-24 bg-gradient-to-tr from-blue-500/20 to-blue-200/20">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl text-blue-900 font-bold text-center mb-8 md:mb-12">About Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className="w-[50%] -mt-12 flex mx-auto">
                            <AboutIllustration />
                        </div>
                        <div className="text-blue-900/80">
                            <p>
                                At KeDA-ERP, we are dedicated to transforming the way businesses operate through innovative and comprehensive ERP solutions. Our mission is to empower organizations of all sizes by streamlining their operations, enhancing efficiency, and boosting profitability.
                            </p>
                            <br />
                            <p>
                                With years of experience and a deep understanding of the industry, we provide a robust ERP system designed to meet the unique needs of businesses across various sectors. Our platform integrates seamlessly with existing processes, offering advanced features in inventory management, financial management, HR management, CRM, reporting, and supply chain management.
                            </p>
                            <br />
                            <p>
                                Our team of experts is committed to delivering exceptional service and support, ensuring that your organization achieves its goals and stays ahead in a competitive market. We are passionate about technology and dedicated to helping you unlock your business's full potential.
                            </p>
                            <br />
                            <p>
                                Join us on a journey to optimize your operations and drive growth. Experience the difference with KeDA-ERP and discover how our ERP system can revolutionize your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-blue-200/20">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl text-blue-900 font-bold text-center mb-8 md:mb-12">Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <PriceCard 
                            title="Basic" 
                            price="100juta" 
                            listing={[
                                'Mencatat barang masuk', 
                                'Mencatat barang keluar', 
                                'Mencatat hasil keuntungan'
                            ]} 
                        />
                        <PriceCard 
                            title="Business" 
                            price="150juta" 
                            listing={[
                                'Mencatat barang masuk dan keluar',
                                'Mencatat Keuntungan',
                                'Analisa hasil penjualan',
                                'Support 7x24 Jam'
                            ]} 
                        />
                        <PriceCard 
                            title="Entrepreneur" 
                            price="200juta" 
                            listing={[
                                'Mencatat barang masuk dan keluar',
                                'Mencatat Keuntungan',
                                'Analisa hasil penjualan',
                                'Support 7x24 Jam',
                                'Export data ke Excel',
                                'AI Prediksi penghasilan'
                            ]} 
                        />
                    </div>
                </div>
            </section>

            <section id="contact" className="pb-16 md:pb-20 lg:pb-24 bg-gradient-to-tr from-blue-500/20 to-blue-200/20">
                <div className="container mx-auto flex flex-col gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 md:gap-28">
                        <div className="flex items-end flex-col h-full justify-center">
                            <h2 className="text-3xl md:text-6xl text-blue-900 font-bold text-right mb-8 md:mb-12">Contact Us</h2>
                            <p className="text-blue-900/80 text-right">We're here to help you streamline your business operations with our powerful ERP solutions. Whether you have questions, need support, or want to learn more about our offerings, feel free to reach out to us. Our team of experts is ready to assist you.</p>
                        </div>
                        <div className="flex w-3/4">
                            <SocialIllustration />
                        </div>
                    </div>

                    <div className="-mt-28">
                        <h2 className="text-xl md:text-2xl text-blue-900 font-bold mb-2 md:mb-4">Get in Touch</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
                            <div className="border border-blue-500 rounded-xl p-4">
                                <h2 className="text-lg md:text-xl text-blue-900 font-semibold mb-2">
                                    Phone
                                </h2>
                                <h2 className="md:text-lg text-blue-900">021 012345</h2>
                                <p className="text-blue-900/80">Available Monday to Friday, 9 AM to 6 PM.</p>
                            </div>
                            <div className="border border-blue-500 rounded-xl p-4">
                                <h2 className="text-lg md:text-xl text-blue-900 font-semibold mb-2">
                                    Email
                                </h2>
                                <h2 className="md:text-lg text-blue-900">info@kedaerp.com</h2>
                                <p className="text-blue-900/80">We'll respond to your inquiries within 24 hours.</p>
                            </div>
                            <div className="border border-blue-500 rounded-xl p-4">
                                <h2 className="text-lg md:text-xl text-blue-900 font-semibold mb-2">
                                    Office Address
                                </h2>
                                <h2 className="md:text-lg text-blue-900">Jakarta, Indonesia</h2>
                                <p className="text-blue-900/80">Visit us for a personal consultation or product demonstration.</p>
                            </div>
                            <div className="border border-blue-500 rounded-xl p-4">
                                <h2 className="text-lg md:text-xl text-blue-900 font-semibold mb-2">
                                    Stay Connected
                                </h2>
                                <h2 className="md:text-lg text-blue-900">Follow us on social media for the latest updates and insights</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-blue-900/80">Instagram</li>
                                    <li className="text-blue-900/80">Facebook</li>
                                    <li className="text-blue-900/80">Tiktok</li>
                                    <li className="text-blue-900/80">Twitter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="text-blue-900/80">We look forward to connecting with you and helping your business thrive with our ERP solutions.</p>
                </div>
            </section>

            <section id="contact" className="bg-blue-500 text-white py-16 md:py-20 lg:py-24">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg md:text-xl mb-8">Take control of your business with our all-in-one ERP system.</p>
                    <a href="/"
                        className="bg-white text-blue-500 font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg hover:bg-gray-200">Get a
                        Free Demo</a>
                </div>
            </section>

            <footer className="bg-blue-200/20 text-blue-900/80 py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 KeDA-ERP. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;