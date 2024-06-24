const Page = async() => {
  const fec =  await fetch ('http://localhost:4000/post', { next: { revalidate: 36000 } })
  const res = await fec.json()
  const postsq = res.posts
  return (
    <>
      <h1>{res.posts[0].title}</h1>
      <ul>
        {postsq.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Page