import Image from "next/image";
import Link from "next/link";


const BlogEntry = () => {
  return (
    <article>
        <Image layout='responsive' height={800} width={600} src="/img/aboutUs.jpg" alt="blog pic"/>
        <div>
          <h3>Titulo del post</h3>
          <p>Fecha del post</p>
          <p>Resumen del post</p>
          <Link href="#">Read more</Link>
        </div>
    </article>
  )
}

export default BlogEntry