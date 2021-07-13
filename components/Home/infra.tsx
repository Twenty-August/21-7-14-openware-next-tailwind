import { FC } from 'react'

export const Infra: FC = () => {
  return (
    <div className='bg-gray-50'>
      <div className='grid grid-cols-1 gap-5 px-4 py-20 xl:container lg:grid-cols-12 lg:gap-10 xl:gap-15 2xl:gap-20 lg:py-36'>
        <div className='lg:col-span-6 xl:col-span-7'>
          <h4 className='mb-2 text-gray-500'>
            CONTINUOUS BUILD AND INTEGRATION
          </h4>
          <h2 className='text-3xl font-bold tracking-wide lg:text-4xl xl:text-5xl'>
            Infrastructure as Code.
          </h2>
          <p className='mt-2 text-xl tracking-wide lg:mt-8 lg:leading-relaxed'>
            Plan, create and maintain your Infrastructure as Code.<br /><br />
            Automate platform deployment, scaling, and management of containerized applications in Kubernetes.<br /><br />
            Implement Concourse as a micro-service build server.
          </p>
        </div>

        {/* Code Screen */}
        <div className='lg:col-span-6 xl:col-span-5 flex flex-col lg:flex-row lg:items-center overflow-x-auto'>
          <div className=''>
            <div className='flex items-center h-6 px-4 bg-dark'>
              <div className='w-2.5 h-2.5 mr-1 rounded-full bg-gray-600'></div>
              <div className='w-2.5 h-2.5 mr-1 rounded-full bg-gray-600'></div>
              <div className='w-2.5 h-2.5 mr-1 rounded-full bg-gray-600'></div>
            </div>

            <div className='p-5 bg-black xl:px-9'>
              <code className='text-xs leading-relaxed text-white md:text-sm'>
                <pre>resource <span className='text-yellow'>&quote;digitalocean_droplet&quote; &quote;web&quote;</span> &#123;</pre>
                <pre>  name   = <span className='text-yellow'>&quote;tf-web&quote;</span></pre>
                <pre>  size   = <span className='text-yellow'>&quote;512mb&quote;</span></pre>
                <pre>  image  = <span className='text-yellow'>&quote;centos-5-8-x32&quote;</span></pre>
                <pre>  region = <span className='text-yellow'>&quote;sfo1&quote;</span></pre>
                <pre>&#125;</pre>
                <br />
                <pre>resource <span className='text-yellow'>&quote;dnsimple_record&quote; &quote;hello&quote;</span> &#123;</pre>
                <pre>  domain = <span className='text-yellow'>&quote;example.com&quote;</span></pre>
                <pre>  name   = <span className='text-yellow'>&quote;test&quote;</span></pre>
                <pre>  value  = <span className='text-yellow'>&quote;$&#123;digitalocean_droplet.web.ipv4_address&#125;&quote;</span></pre>
                <pre>  type   = <span className='text-yellow'>&quote;A&quote;</span></pre>
                <pre>&#125;</pre>
                <br />
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
