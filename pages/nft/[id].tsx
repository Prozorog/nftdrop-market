import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NFTdropPage() {
  // * auth
  const conectWithMetamask = useMetamask()
  const address = useAddress()
  const disconect = useDisconnect()
  //* ----

  console.log(address);
  

  return (
    <div
      className="flex h-screen flex-col
                  lg:grid lg:grid-cols-10"
    >
      {/* left */}
      <div
        className="flex flex-col items-center justify-center
                        bg-gradient-to-br
                        from-cyan-800 
                        to-rose-500 py-2 lg:col-span-4
                        lg:min-h-screen"
      >
        <div
          className="rounded-xl bg-gradient-to-br from-yellow-400
                          to-purple-600
                          p-2"
        >
          <img
            className="w-44 
                        rounded-xl object-cover 
                        lg:h-96 lg:w-72"
            src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png"
            alt="nft"
          />
        </div>
        <div
          className="space-y-2 
                      p-5 text-center"
        >
          <h1
            className="text-4xl font-bold 
                        text-white"
          >
            Papafam Apes
          </h1>

          <h2
            className="text-xl 
                        text-green-300"
          >
            A collection of Papafam Apes who live & breath React!
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex items-center justify-between">
          <h1
            className="w-52 
                          cursor-pointer
                          text-xl
                          font-extralight
                          sm:w-80"
          >
            The{' '}
            <span
              className="font-extrabold
                              underline
                              decoration-pink-600/50"
            >
              Papafam
            </span>{' '}
            NFT Market Place
          </h1>

          <button
            onClick={() => (address ? disconect() : conectWithMetamask())}
            className="rounded-full
                              bg-rose-400
                              px-4 py-2
                              font-bold text-white
                              lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'sign Out' : 'Sign in'}
          </button>
        </header>

        <hr className="my-2 border" />

        {
          address && (
            <p className="text-center text-sm text-rose-400" 
            >You are logged with wallet 
              {address.substring(0,5)}...
              {address.substring(address.length - 5)}
            </p>
          )
        }

        {/* contents */}
        <div
          className="mt-10 flex flex-1 flex-col items-center 
                          space-y-6
                          text-center
                          lg:justify-center lg:space-y-0"
        >
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://cdn.sanity.io/images/9ep8u6nk/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp"
            alt="nft"
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The PAPAFAM Ape Coding Club | NFT Drop
          </h1>

          <p
            className="pt-2
                        text-xl
                        text-green-500"
          >
            13 / 21 NFT's claimed
          </p>
        </div>

        {/* button */}
        <button
          className="mt-10 h-16
                            rounded-full
                            bg-red-600 font-bold
                            text-white
                            "
        >
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTdropPage
