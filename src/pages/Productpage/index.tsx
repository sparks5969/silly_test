import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function ProductpagePage() {
  return (
    <>
      <Helmet>
        <title>first test</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[279px] bg-white-A700">
        <header className="flex justify-center items-center w-full p-8">
          <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1248px]">
            <Text size="md" as="p" className="!text-light_green-900 tracking-[-0.32px] !font-newsreader">
              World Peas
            </Text>
            <div className="flex flex-row justify-between items-center w-auto gap-12">
              <a href="#">
                <Text as="p" className="text-center">
                  Shop
                </Text>
              </a>
              <a href="#">
                <Text as="p" className="text-center">
                  Newstand
                </Text>
              </a>
              <a href="#">
                <Text as="p" className="text-center">
                  Who we are
                </Text>
              </a>
              <a href="#">
                <Text as="p" className="text-center">
                  My profile
                </Text>
              </a>
              <Button color="light_green_900" size="sm" className="min-w-[126px] rounded-lg">
                Basket (3)
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-start justify-start w-full gap-10">
          <div className="flex flex-row justify-center w-full pt-[54px] px-[54px] bg-white-A700">
            <div className="flex flex-col items-center justify-start w-full gap-[30px] max-w-[1248px]">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-start items-center gap-6">
                  <Text size="lg" as="p" className="tracking-[-1.28px] !font-newsreader">
                    Produce
                  </Text>
                  <Text size="s" as="p">
                    <span className="text-black-900 font-medium">Fresh</span>
                    <span className="text-black-900 font-light">— August 21, 2023</span>
                  </Text>
                </div>
                <div className="flex flex-row justify-start gap-2">
                  <Button color="light_green_900" className="min-w-[88px]">
                    Default
                  </Button>
                  <Button className="border-gray-400 border border-solid min-w-[62px]">A-Z</Button>
                  <Button className="border-gray-400 border border-solid min-w-[101px]">List view</Button>
                </div>
              </div>
              <div className="h-[2px] w-full bg-gray-300 shadow-xs" />
            </div>
          </div>
          <div className="flex flex-row w-[58%] ml-24 gap-8">
            <div className="flex flex-col items-start justify-start w-[49%] pb-7 gap-[23px] border-gray-300 border-2 border-solid bg-gray-50 rounded-[24px]">
              <Img
                src="images/img_ed_o_neil_avvdz.png"
                alt="heirloom_tomato"
                className="w-full rounded-tl-[24px] rounded-tr-[24px] object-cover"
              />
              <div className="flex flex-col items-start justify-start w-full mx-auto max-w-[259px]">
                <Heading as="h1" className="!text-black-900">
                  Heirloom tomato
                </Heading>
                <Heading as="h2" className="mt-[5px]">
                  $5.99 / lb
                </Heading>
                <Text as="p" className="mt-5 !text-gray-600">
                  Grown in San Juan Capistrano, CA
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[49%] pb-7 gap-[26px] border-gray-300 border-2 border-solid bg-gray-50 rounded-[24px]">
              <Img
                src="images/img_noonbrew_zicb4_ekmak_unsplash.png"
                alt="noonbrewzicbfou"
                className="w-full rounded-tl-[24px] rounded-tr-[24px] object-cover"
              />
              <div className="flex flex-col items-start justify-start w-full mx-auto max-w-[239px]">
                <Heading as="h3" className="!text-black-900">
                  Organic ginger
                </Heading>
                <Heading as="h4" className="mt-[3px]">
                  $12.99 / lb
                </Heading>
                <Text as="p" className="mt-5 !text-gray-600">
                  <span className="text-gray-600">Grown in </span>
                  <span className="text-gray-600">Huntington Beach</span>
                  <span className="text-gray-600">, CA</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
