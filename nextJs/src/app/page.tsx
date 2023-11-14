import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from '@/components/ui/button'
import Image from "next/image";

export default function Home() {
  return (
    <>
    <MaxWidthWrapper className="mb-12 mt-32 sm:mt-44 flex flex-col items-center justify-center text-center">
      <div className="mx-auto flex max-w-fit mb-3 items-center justify-center space-x-2 overflow-hidden px-2 py-2 backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          
        <h1 className="font-semibold text-center text-green-600 text-6xl">AeroGrow</h1>
      </div>
      <h1 className="max-w-3xl text-5xl font-bold md:text-1-xl lg:text-3xl">
        The fitness app to achieve your basic fitness target
      </h1>

      <Link className={buttonVariants(
        {
          size: 'lg',
          className: 'mt-6 mr-5',
        }
      )} href='dashboard' target='_blank'>
        Enter the minutes exercised today
      </Link>
    </MaxWidthWrapper>
      { }
      <div>
    {/* image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/Flower.jpg"
                width={1000}
                height={1000}
                quality={100}
                alt="AeroGrow starter plant"
              />
            </div>
            <div> 
              
            </div>
          </div>
        </div>
      </div>
  
  </>
  )
}