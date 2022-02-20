import React from 'react'
import kochiDog from '../../assets/img/kochi/kochi-1.svg';

import { Button } from '@windmill/react-ui'

function KochiNav({ title, value, children: icon }) {
  return (
    <div className="flex justify-center mt-20 mb-24">
      <div>
        <div className="text-center">
          <img src={kochiDog} alt="KochiKen Nav" width="200" class="mx-auto block" />
          <h1 className="uppercase text-white text-5xl leading-normal">Kochi<span className="text-k-orange">pad</span></h1>
          <span className="text-gray-300 text-xl">Launching your crypto journey</span>
        </div>
        <div className="text-center max-w-2xl mt-20">
          <h2 className="uppercase text-white text-3xl">
            <span className="text-k-orange">Low</span> Fees. <span className="text-k-orange">No</span> Tokens Taken.
            <span className="text-k-orange">All</span> Revenue Shared
          </h2>
          <span className="text-gray-300 text-xl pt-5 block">Launch your token with Kochi. All fees are shared among Kochi token and NFT stakers.</span>
          <Button className="font-bold mt-4 text-lg">Launch your project now</Button>
        </div>
      </div>
    </div>
  )
}

export default KochiNav
