import { storyblokEditable } from '@storyblok/js'

const Blog = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1 className="text-white">{blok.title}</h1>
      <p>{blok?.author.name}</p>
    </div>
  )
}

export default Blog
