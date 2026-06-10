import Image from 'next/image';

export const experience = [
  {
    title: 'Present',
    content: (
      <div>
        <p className='mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <strong>
            Full-stack Developer — Mytek Innovations Pvt Ltd
          </strong>
          <br />
          Dec 2025 – Present · 7 mos | Turbhe, Navi Mumbai · On-site
        </p>

        <ul className='mb-8 list-disc pl-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <li>
            Developing and maintaining responsive, high-performance web applications using React, Next.js, and Node.js.
          </li>
          <li>
            Designing and optimizing database schemas, building scalable RESTful APIs, and implementing secure integrations.
          </li>
          <li>
            Collaborating with cross-functional teams to translate user requirements into robust technical solutions.
          </li>
          <li>
            Improving code quality and deployment efficiency, adhering to best practices in modern web development.
          </li>
        </ul>

        <div className='mt-4 grid grid-cols-3 gap-4'>
          <Image
            src='/experience/myteklogo.png'
            alt='Mytek Innovations logo'
            width={150}
            height={150}
            className='h-40 w-auto rounded-lg object-cover shadow-md md:h-44 lg:h-60'
          />
        </div>
      </div>
    )
  },
  {
    title: '2025',
    content: (
      <div>
        <p className='mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <strong>
            Software Developer — Asian Exporters Chamber of Commerce and
            Industry (AECCI)
          </strong>
          <br />
          Feb 2024 – Apr 2025 | Belapur CBD, Navi Mumbai
        </p>

        <ul className='mb-8 list-disc pl-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <li>Managed backend infrastructure and cloud services on AWS.</li>
          <li>
            Delivered scalable full-stack solutions using React, Node.js,
            Express, and MongoDB.
          </li>
          <li>
            Collaborated with cross-functional teams to improve e-platform
            efficiency and UX.
          </li>
          <li>
            Implemented digital services like membership, eCO, and document
            attestation.
          </li>
        </ul>

        <div className='mt-4 grid grid-cols-3 gap-4'>
          <Image
            src='/experience/eplatform.png'
            alt='AECCI e-platform'
            width={150}
            height={150}
            className='h-40 w-auto rounded-lg object-cover shadow-md md:h-44 lg:h-60'
          />
          <Image
            src='/experience/aeccilogo.png'
            alt='AECCI dashboard'
            width={150}
            height={150}
            className='h-40 w-auto rounded-lg object-cover shadow-md md:h-44 lg:h-60'
          />
        </div>
      </div>
    )
  },
  {
    title: '2023',
    content: (
      <div>
        <p className='mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <strong>Web Developer Intern — Zencommerce India</strong>
          <br />
          Aug 2023 – Nov 2023 | Nerul, Navi Mumbai
        </p>

        <ul className='mb-8 list-disc pl-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <li>
            Developed e-commerce websites with HTML, CSS, JavaScript, and
            Bootstrap.
          </li>
          <li>
            Enhanced user interfaces and ensured responsiveness for multiple
            devices.
          </li>
          <li>
            Integrated WordPress and jQuery for dynamic components and UI
            improvements.
          </li>
        </ul>
        <div className='mt-4 grid grid-cols-3 gap-4'>
          <Image
            src='/experience/zencommerce.png'
            alt='AECCI e-platform'
            width={150}
            height={150}
            className='h-40 w-auto rounded-lg object-cover shadow-md md:h-44 lg:h-60'
          />
        </div>
      </div>
    )
  },
  {
    title: 'Education',
    content: (
      <div>
        <p className='mb-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <strong>
            Bachelor of Computer Science — Pillai HOC College, Rasayani
          </strong>
          <br />
          2017 – 2020
        </p>

        <p className='mb-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <strong>
            Higher Secondary Certificate (H.S.C) — Janata Junior College
          </strong>
          <br />
          2017 | Khopoli, India
        </p>

        <p className='mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm'>
          <strong>
            Secondary School Certificate (S.S.C) — S.N.P Vidyamandir, Chowk
          </strong>
          <br />
          2015 | Maharashtra, India
        </p>

        <div className='mt-4 grid grid-cols-3 gap-4'>
          <Image
            src='/experience/campus.png'
            alt='Pillai College Rasayani'
            width={150}
            height={150}
            className='h-40 w-auto rounded-lg object-cover shadow-md md:h-44 lg:h-60'
          />
          <Image
            src='/experience/pillai.png'
            alt='MES campus'
            width={150}
            height={150}
            className='h-40 w-auto rounded-lg object-cover shadow-md md:h-44 lg:h-60'
          />
        </div>
      </div>
    )
  }
];
