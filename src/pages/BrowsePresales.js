import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody, Label, Select, Input } from '@windmill/react-ui'

import { SearchIcon } from '../icons'

function BrowsePresale() {
  return (
    <>
      <div className="mt-8">
        <PageTitle>Browse Presales</PageTitle>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-5">
        <div className="col-span-3">
          <Label className="mt-4">
            <span>Icon left</span>
            {/* <!-- focus-within sets the color for the icon when input is focused --> */}
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input
                className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jane Doe"
              />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <SearchIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </Label>
        </div>
        <div>
          <Label className="mt-4">
            <span>Filter by</span>
            <Select className="mt-1">
              <option>All presales</option>
              <option>KYC</option>
              <option>Upcoming</option>
              <option>In progress</option>
              <option>Filled</option>
              <option>Ended</option>
              <option>Canceled</option>
            </Select>
          </Label>
        </div>
        <div>
          <Label className="mt-4">
            <span>Sort by</span>
            <Select className="mt-1">
              <option>No Filter</option>
              <option>Hard Cap</option>
              <option>Soft Cap</option>
              <option>LP percent</option>
              <option>End time</option>
            </Select>
          </Label>
        </div>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis
              numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet
              ratione! Ratione, nihil dolorum.
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-purple-600">
          <CardBody>
            <p className="mb-4 font-semibold">Colored card</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis
              numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet
              ratione! Ratione, nihil dolorum.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default BrowsePresale
