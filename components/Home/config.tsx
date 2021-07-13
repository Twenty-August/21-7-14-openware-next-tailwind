import { FC } from 'react'

export const Config: FC = () => {
  return (
    <div className='grid grid-cols-1 gap-5 px-4 py-20 xl:container lg:grid-cols-12 lg:gap-10 xl:gap-15 2xl:gap-20 lg:py-36'>
      <div className='lg:col-span-6 xl:col-span-7'>
        <h4 className='mb-2 text-gray-500'>
          CONTINUOUS BUILD AND INTEGRATION
        </h4>
        <h2 className='text-3xl font-bold tracking-wide lg:text-4xl xl:text-5xl'>
          Configuration as Code.
        </h2>
        <p className='mt-2 text-xl tracking-wide lg:mt-8 lg:leading-relaxed'>
          Plan, create and maintain your Infrastructure as Code.<br /><br />
          Configure Pipelines with a simple, easy‑to‑read file that you commit to your Git repository in Drone.<br /><br />
          Execute each Pipeline step inside an isolated Docker container, automatically downloaded at runtime.
        </p>
      </div>

      {/* Code Screen */}
      <div className=' lg:col-span-6 xl:col-span-5 flex flex-col lg:flex-row lg:items-center overflow-x-auto'>
        <div className='lg:w-full'>
          <div className='flex items-center h-6 px-4 bg-dark'>
            <div className='w-2.5 h-2.5 mr-1 rounded-full bg-gray-600'></div>
            <div className='w-2.5 h-2.5 mr-1 rounded-full bg-gray-600'></div>
            <div className='w-2.5 h-2.5 mr-1 rounded-full bg-gray-600'></div>
          </div>

          <div className='p-5 bg-darkblue xl:px-9'>
            <code className='text-xs leading-relaxed text-white md:text-sm'>
              <pre>
                kind <span className='text-red'>&quote;pipeline&quote;</span></pre>
              <pre>steps:</pre>
              <pre>- name: <span className='text-red'>&quote;test&quote;</span></pre>
              <pre>  image: <span className='text-red'>&quote;node&quote;</span></pre>
              <pre>  commmands:</pre>
              <pre>  - <span className='text-red'>&quote;yarn install&quote;</span></pre>
              <pre>  - <span className='text-red'>&quote;yarn start&quote;</span></pre>
              <br />
              <pre>services:</pre>
              <pre>- name: <span className='text-red'>database</span></pre>
              <pre>  image: <span className='text-red'>mysql</span></pre>
              <pre>  ports:</pre>
              <pre>  - <span className='text-red'>3306</span></pre>
              <br />
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}
