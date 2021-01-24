import React, { Component } from 'react'
import {NextSeo} from "next-seo"
import Image from "next/image"
import Link from 'next/link'

class Error extends Component {
  render() {
    return (
      <React.Fragment>

        <NextSeo
          title="Not found - Lynth - Learn. Build. Innovate."
          description="Lynth official website"
          openGraph={{
            url: 'https:/www.lynth.io/',
            title: 'Lynth - Learn. Build. Innovate.',
            description: 'Lynth official website',
            images: [
              {
                url: 'images/og_img.jpg',
                width: 1200,
                height: 627,
                alt: 'Lynth official website',
              }
            ],
            site_name: 'Lynth - Learn. Build. Innovate.',
          }}
        />

        <Image
          src="/images/background.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />

        <div className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen">
          <p className="text-white text-9xl font-medium">
            404
          </p>
          <p className="text-white text-4xl mt-6">
            We can't find that
          </p>
          <Link href='/'>
            <a className="mt-6 px-6 py-2 border-2 rounded-full text-white hover:bg-white hover:text-black transition-all">
              Home page
            </a>
          </Link>
        </div>

      </React.Fragment>
    );
  }
}

export default Error;