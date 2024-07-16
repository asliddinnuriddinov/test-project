'use client'
import React from "react";
import Container from "../container/Container";
import Link from "next/link";
import { FaInstagram,FaFacebook,FaTelegram   } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#231E1E] py-14">
      <Container>
        <div className="lg:flex-row flex-col flex gap-14">
          <div className="flex gap-12 flex-1">
            <Link href={"/"}>
              <img className="w-full object-contain min-w-[80px]" src="./assets/logo.svg" alt="" />
            </Link>
            <div className="text-white flex flex-col gap-10">
              <div className="text-sm sm:text-[16px]">
                <p>Адрес головного офиса:</p>
                <p className="mt-2 max-w-[428px]">
                  100100, Республика Узбекистан, город Ташкент, Яккасарайский
                  район, улица Шота Руставели, 53Б
                </p>
              </div>

              <div className="text-sm sm:text-[16px]">
                <p>Адрес производства:</p>
                <p className="mt-2 max-w-[428px]">
                  111305, Республика Узбекистан, Ташкентская область,
                  Паркентский район, Каракалпакский Марказий МФУ
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-12">
            <ul className="text-white flex flex-col gap-3">
              <li>
                <Link href={"/"} className={``}>
                  Главная
                </Link>
              </li>
              <li>
                <Link href={"/"} className={``}>
                  О нас
                </Link>
              </li>
              <li>
                <Link href={"/"} className={``}>
                  Продукты
                </Link>
              </li>
              <li>
                <Link href={"/"} className={``}>
                  Контакты
                </Link>
              </li>
              <li>
                <Link href={"/"} className={``}>
                  Новости
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-3 text-white">
                <li>
                Как с нами связаться?
                </li>
                <li>
                    <a href="mailto:info@yumabio.com">info@yumabio.com</a>
                </li>
                <li>
                    <a href="tel:+998 95 478 88 87">+998 95 478 88 87</a>
                </li>
                <li>
                    <a href="tel:+998 93 321 24 42">+998 93 321 24 42</a>
                </li>
                <li className="text-2xl flex items-center gap-2">
                    <Link href={'/'}>
                        <FaInstagram/>
                    </Link>
                    <Link href={'/'}>
                        <FaFacebook />
                    </Link>
                    <Link href={'/'}>
                        <FaTelegram />
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
