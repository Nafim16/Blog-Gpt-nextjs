import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../Components/AppLayout";

export default function TokenTopup() {
    return <div>
        <h1>THIS IS TOKEN PAGE</h1>
    </div>;
}


TokenTopup.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {},
    }
});