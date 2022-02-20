import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'

function LaunchPresale() {
  return (
    <>
      <div className="mt-8">
        <PageTitle>Presale Launcher</PageTitle>
      </div>

      <div className="grid gap-6 mt-8 mb-8 md:grid-cols-3">
        <Card className="col-span-2">
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

export default LaunchPresale
