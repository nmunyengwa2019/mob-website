import beachVidz from '-!file-loader!../assets/beachVid.mp4'

const Vidz = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' autoPlay loop muted src={beachVidz.mp4} controls />
        {/* <video className='w-full h-full object-cover' controls>
              <source src={beachVidz.mp4} />
            </video> */}
        </div>
  )
}

export default Vidz