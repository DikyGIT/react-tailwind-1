import Image1 from "../assets/image/image1.jpg";
import Image2 from "../assets/image/image2.jpg";
import Image3 from "../assets/image/image3.jpg";
import Image4 from "../assets/image/image4.jpg";
import Image5 from "../assets/image/image5.jpg";
import Image6 from "../assets/image/image6.jpg";

import AboutImage from "../assets/image/about.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* SECTION HERO */}
      <div className="hero w-full min-h-screen flex items-center">
        <div className="container mx-auto md:ps-0 px-4">
          <div className="hero-box">
            <h1 className="text-5xl font-bold text-white mb-10 animate__animated animate__fadeInLeft animate__delay-1s">
              Panorama <span className="text-2xl font-normal">View</span>
            </h1>
            <p className="md:w-4/5 md:p-10 px-4 pt-4 text-white text-base/loose bg-black bg-opacity-50 rounded-md mb-14 w-full md:overflow-auto overflow-y-scroll md:h-auto h-40 animate__animated animate__fadeInUp animate__delay-1s">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde exercitationem voluptas minus aspernatur quas officia, eveniet adipisci iste corporis rerum explicabo, beatae iusto maxime. Numquam officia consequatur
              cumque quasi!
            </p>
            <div className="button animate__animated animate__fadeInLeft animate__delay-1s">
              <a href="#gallery" className="py-4 px-8 bg-white rounded-md text-xl font-bold">
                More Nature <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION HERO */}

      {/* SECTION GALLERY */}
      <div className="gallery w-full min-h-screen py-32" id="gallery">
        <div className="container mx-auto">
          <div className="gallery-box">
            <div className="box text-center mb-20">
              <h1 className="text-5xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
                Gallery
              </h1>
              <p className="text-base/loose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:px-0 px-2">
              <img src={Image1} alt="unsplash.com" className="w-full h-[250px] grayscale hover:grayscale-0 transition-all duration-300" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000" />
              <img src={Image2} alt="unsplash.com" className="w-full h-[250px] grayscale hover:grayscale-0 transition-all duration-300" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1100" />
              <img src={Image3} alt="unsplash.com" className="w-full h-[250px] grayscale hover:grayscale-0 transition-all duration-300" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1200" />
              <img src={Image4} alt="unsplash.com" className="w-full h-[250px] grayscale hover:grayscale-0 transition-all duration-300" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1300" />
              <img src={Image5} alt="unsplash.com" className="w-full h-[250px] grayscale hover:grayscale-0 transition-all duration-300" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1400" />
              <img src={Image6} alt="unsplash.com" className="w-full h-[250px] grayscale hover:grayscale-0 transition-all duration-300" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1500" />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION GALLERY */}

      {/* SECTION ABOUT */}
      <div className="about w-full min-h-screen pb-32 md:px-0 px-2" id="about">
        <div className="container mx-auto">
          <div className="about-box">
            <div className="box text-center mb-20">
              <h1 className="text-5xl font-bold">About</h1>
            </div>
            <div className="box grid md:grid-cols-2 grid-cols-1 gap-20 items-center justify-center">
              <div className="md:order-1 order-2">
                <h2 className="text-3xl font-bold underline mb-6">Nature</h2>
                <p className="text-base/loose">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt harum tempore consectetur, officiis fuga velit provident fugit odio alias saepe aspernatur voluptates eaque, architecto cum magni cumque quidem, molestiae nam!
                </p>
              </div>
              <div className="md:order-2 order-1">
                <img src={AboutImage} alt="unsplash.com" className="w-full h-[500px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION ABOUT */}

      {/* SECTION SERVICES */}
      <div className="services min-h-screen flex items-center pb-32 px-2" id="services">
        <div className="container mx-auto">
          <div className="services-box">
            <div className="box text-center mb-20">
              <h1 className="text-5xl font-bold mb-6">Services</h1>
              <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, hic!</p>
            </div>
            <div className="box grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-between gap-8">
              <div className="bg-sky-400 p-4">
                <h4 className="text-2xl font-bold mb-4">Panorama Favorit</h4>
                <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aliquam incidunt. Ex eligendi commodi doloremque cumque nemo temporibus quidem eum?</p>
              </div>
              <div className="bg-sky-400 p-4">
                <h4 className="text-2xl font-bold mb-4">Gallery Alam Indonesia</h4>
                <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aliquam incidunt. Ex eligendi commodi doloremque cumque nemo temporibus quidem eum?</p>
              </div>
              <div className="bg-sky-400 p-4">
                <h4 className="text-2xl font-bold mb-4">Rekomendasi</h4>
                <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aliquam incidunt. Ex eligendi commodi doloremque cumque nemo temporibus quidem eum?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION SERVICES */}

      {/* SECTION CONTACT */}
      <div className="contact py-20 px-2 bg-slate-800" id="contact">
        <div className="container mx-auto">
          <div className="contact-box grid md:grid-cols-2 grid-cols-1 gap-20 items-center text-white">
            <div className="box">
              <h1 className="text-5xl font-bold mb-4 md:text-left text-center">Contact</h1>
              <p className="text-base/loose mb-10 md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex!</p>
              <form action="" className="flex flex-col">
                <label htmlFor="nama" className="font-bold mb-2">
                  Nama Lengkap
                </label>
                <input type="text" name="nama" id="nama" className="border border-slate-900 py-3 px-2 rounded mb-8 text-black" />
                <label htmlFor="email" className="font-bold mb-2">
                  Email
                </label>
                <input type="email" name="email" id="email" className="border border-slate-900 py-3 px-2 rounded mb-8 text-black" />
                <label htmlFor="pesan" className="font-bold mb-2">
                  Pesan
                </label>
                <textarea name="pesan" id="pesan" cols="30" rows="10" className="border border-slate-900 py-3 px-2 rounded mb-8 text-black"></textarea>
              </form>
            </div>
            <div className="box text-center">
              <h1 className="text-4xl font-bold mb-4">Nature</h1>
              <h1 className="text-2xl font-bold underline mb-4">Nature Of Indonesia</h1>
              <p className="text-base/loose mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod inventore consequuntur esse sint minus deserunt nisi dolores tempora? Ipsa, quasi.</p>
              <div className="social flex items-center justify-center gap-4 mb-4">
                <i className="fa-brands fa-linkedin text-2xl"></i>
                <i className="fa-brands fa-facebook text-2xl"></i>
                <i className="fa-brands fa-twitter text-2xl"></i>
              </div>
              <p>
                &copy; Copyright by <span className="font-bold underline">Ngoding Mastery</span> {new Date().getFullYear()}, All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION CONTACT */}
    </div>
  );
};

export default HomePage;
