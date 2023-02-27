import { NextPage } from 'next'
import dynamic from 'next/dynamic'
const DynamicNotice = dynamic(() => import('@/components/screens/notice/Notice'), {
    ssr: false
})

const NotePage: NextPage = () => {

    return <DynamicNotice />
}

export default NotePage