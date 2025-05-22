
import { abilities } from '../../constants'

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg sm:mt-4 md:mt-3'>
      <div className='mx-auto grid-3-cols'>
        {abilities.map(({imgPath ,title,desc})=>(
          <div key={title} className='card-border rounded-xl p-9 flex flex-col gap-4'>
            <div className='size-14 flex items-center justify-center rounded-full'>
              <img src={imgPath} alt={title} />
            </div>
            <h3 className='text-white text-2xl font-semibold mt-2 '>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards