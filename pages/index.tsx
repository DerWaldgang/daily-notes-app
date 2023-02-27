import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicDaily = dynamic(() => import('@/components/screens/home/Daily'), {
    ssr: false
})

const HomePage: NextPage = () => {

    return <DynamicDaily />
}

export default HomePage
