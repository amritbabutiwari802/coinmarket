import { useRouter } from 'next/router'
import React from 'react'
import ViewPage from '../../components/pages/ViewPage'

type Props = {}

const Page = (props: Props) => {
    const router = useRouter()
    const { param } = router.query
    return <ViewPage param={param} />
}

export default Page
