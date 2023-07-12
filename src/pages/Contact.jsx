import React, { useEffect } from "react";
import Navbar from "../component/navbar";
import { IoIosSend } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="relative bg-base-100">
      <Navbar />
      <h1
        data-aos="fade-down"
        className="pt-20 text-5xl font-semibold text-center"
      >
        CONTACT
      </h1>
      <div class="flex mt-2">
        <div class="mx-auto">
          <div
            data-aos="fade-up"
            className="bg-primary h-[1px] w-[400px]"
          ></div>
        </div>
      </div>
      <div className="container mx-auto mt-14 ">
        <div className="my-10 ms-10 md:ms-44 ">
          <h3 className="mt-5 text-xl font-semibold text-secondary">
            Find Me In
          </h3>
          <ul className="mt-5 list-disc ms-10 text-secondary">
            <li>
              <p className="font-bold">
                Github -{" "}
                <a
                  className="text-accent hover:underline"
                  href="https://github.com/Fiqri-R-J/"
                >
                  Fiqri-R-J
                </a>
              </p>
            </li>
            <li className="mt-3">
              <p className="font-bold">
                Telegram -{" "}
                <a
                  className="text-accent hover:underline"
                  href="https://t.me/fiqriRJ"
                >
                  @fiqriRJ
                </a>
              </p>
            </li>
            <li className="mt-3">
              <p className="font-bold">
                Threads -{" "}
                <a
                  className="text-accent hover:underline"
                  href="https://www.threads.net/@fiqri_r.j"
                >
                  @fiqri_r.j
                </a>
              </p>
            </li>
            <li className="mt-3">
              <p className="font-bold">
                Linkedin -{" "}
                <a
                  className="text-accent hover:underline"
                  href="https://www.linkedin.com/in/fiqri-r-j/"
                >
                  Fiqri Ramadhan Jupri
                </a>
              </p>
            </li>
            <li className="mt-3">
              <p className="font-bold">
                Email -{" "}
                <a
                  className="text-accent hover:underline"
                  href="mailto:fiqrirj13@gmail.com"
                >
                  fiqrirj13@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="my-10 ms-10 md:ms-44">
          <h3 className="mt-5 text-xl font-semibold text-secondary">
            Message Me
          </h3>
          <div className="w-[400px] md:w-[950px]">
            <div className="text-success">
              <div className="md:grid md:grid-cols-2 md:gap-5">
                <div>
                  <p className="my-3 font-bold">Name</p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full input input-bordered input-primary"
                  />
                </div>
                <div>
                  <p className="my-3 font-bold">Email</p>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full input input-bordered input-primary"
                  />
                </div>
              </div>
              <p className="my-3 font-bold">Message</p>
              <textarea
                className="w-full h-32 textarea textarea-primary"
                placeholder="Messages"
              ></textarea>
              <button className="mt-5 btn btn-outline btn-accent">
                Send <IoIosSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
