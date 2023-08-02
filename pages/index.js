import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "@/store/reducers/counterSlice";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // console.log(state);

  const handleCounter = () => {
    dispatch(increment());
  };
  return (
    <>
      <Navbar />
      <header>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center order-2 order-md-1">
              <h1 className="tittle text-primary m-5">
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <p className="desc me-5 mb-5 ms-5">
                 Mencarikan pekerjaan yang sesuai dengan demand Perusahaan.
              </p>
              <Link href="/talent" className="btn btn-primary btn-lg w-50 ms-5 mb-2">
                Mencari Tallent
              </Link>
              {/* <button
                className="btn btn-primary btn-lg"
                onClick={handleCounter}
              >
                Counter : {state.counterSlice.value}
              </button> */}
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 order-1 order-md-2">
              <div className="image-container ms-5 d-flex justify-content-center">
                <div className="gray-square m-3"></div>
                <div className="purple-square"></div>
                <div className="yellow-square"></div>
                <Image
                  className="m-3"
                  src="/header.jpg"
                  alt="header-img"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="col">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 ">
                <div className="image-container ms-5 d-flex justify-content-center">
                  <div className="gray-square-2 m-3"></div>
                  <div className="purple-square-2"></div>

                  <Image
                    className="m-3"
                    src="/menu1.jpg"
                    alt="header-img"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <h2 className="text-primary m-5 mt-5 mb-4">
                  Kenapa harus mencari tallent di Peworld
                </h2>
                {["Jaringan yang luas", "Pencarian Terperinci", "Growth Mindset Tallent", "Komunitas Interaktif"].map((item, key) => (
                  <div className="d-flex align-items-center mt-0" key={key}>
                    <Image
                      className="ms-5 mt-4 mb-0 "
                      src="/tick1.png"
                      alt="tick-icon"
                      width={25}
                      height={25}
                    />
                    <p className="ms-5 mt-4 mb-0">
                      {item}
                    </p>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center order-2 order-md-1">
              <h2 className="text-primary m-5 mt-2 mb-2">Skill Tallent</h2>
              <p className="ms-5">
              Inovasi teknologi terbaru yang dimiliki oleh bakat kami
              </p>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xs-5 col-sm-5">
                  {["Java", "Kotlin", "PHP", "Javascript"].map((item, key) => (
                    <div className="d-flex align-items-center mt-0" key={key}>
                      <Image
                        className="ms-5 mt-4 mb-0 "
                        src="/tick2.png"
                        alt="tick-icon"
                        width={25}
                        height={25}
                      />
                      <p className="ms-5 mt-4 mb-0 ">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="col-md-6 col-lg-6 col-xs-5 col-sm-5">
                  {["C++", "Ruby", "Python", "10+ Bahasa lainnya"].map(
                    (item, key) => (
                      <div className="d-flex align-items-center mt-0" key={key}>
                        <Image
                          className="ms-5 mt-4 mb-0"
                          src="/tick2.png"
                          alt="tick-icon"
                          width={25}
                          height={25}
                        />
                        <p className="ms-5 mt-4 me-3 mb-0 ">{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 order-1 order-md-2">
              <div className="image-container ms-5 d-flex justify-content-center">
                <div className="gray-square-3 m-3"></div>
                <div className="yellow-square-2"></div>

                <Image
                  className="m-3"
                  src="/menu2.jpg"
                  alt="header-img"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container mb-5 pb-5">
        <div
          className="row flex-column flex-md-row justify-content-between align-items-center px-5 py-4 mb-4 bg-primary"
          style={{
            height: "294px",
            backgroundImage: "url('bg-mulai-dari-sekarang.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "5vw 1vw",
          }}
        >
          <div className="col">
            <h2 className="m-0 text-white text-center text-md-start">
            Yuk, Jadi Talenta Handal Sekarang!
            </h2>
          </div>
          <div className="col text-center text-md-end">
            <Link
              href="/talent"
              className="btn btn-primary btn-lg bg-light text-primary fw-bold p-3"
            >
              Mulai Dari Sekarang
            </Link>
          </div>
        </div>
      </div>
                  <div className="container mb-5 pb-5">
        <div
          className="row flex-column flex-md-row justify-content-between align-items-center px-5 py-4 mb-4 bg-primary"
          style={{
            height: "294px",
            backgroundImage: "url('bg-mulai-dari-sekarang.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "5vw 1vw",
          }}
        >
          <div className="col">
            <h2 className="m-0 text-white text-center text-md-start">
            Yuk, Jadi Talenta Handal Sekarang!
            </h2>
          </div>
          <div className="col text-center text-md-end">
            <Link
              href="/talent"
              className="btn btn-primary btn-lg bg-light text-primary fw-bold p-3"
            >
              Mulai Dari Sekarang
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
