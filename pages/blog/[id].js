import { useRouter } from 'next/router';
import Layout from "../../components/Layout";
import Image from 'next/image';
import { formatDate } from '../../helpers/formatDate';


const BlogEntryContent = ( { blogEntryContent } ) => {

const router = useRouter();

const { content, images, published_at, title} = blogEntryContent;

  return (
    <Layout>
    <main className='container'>
        <h1 className='heading'>{title}</h1>
        <Image layout="responsive" height={400} width={600} alt="post-img" src={images.url} />
        <div>
            <p>
                {formatDate(published_at)}
            </p>
            <p>
                {content}
            </p>
        </div>
    </main>
    </Layout>
  )
}

export async function getServerSideProps ({query: {id}}){ //asi tendriamos el id

    const url= `${process.env.API_URL}/blogs/${id}`;
    const resp = await fetch(url);
    const blogEntryContent = await resp.json();


    return {
        props:{
            blogEntryContent
        }
    }
}

export default BlogEntryContent
