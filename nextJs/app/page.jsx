import Heading from '@/components/Heading';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
export default function HomePage() {
    return (
        <>
            <MaxWidthWrapper className='bg-green-500'><div></div></MaxWidthWrapper>
            <Heading> AeroGrow </Heading>
            {/* <p> the app for your basic fitness needs </p> */}
            <p className="font-roboto text-center text-emerald-700"> the goto app for your basic fitness needs</p>

            <img src="/images/lv0.jpeg" alt="stub"
                width={300}height={1000}
             className="left-1/2 transform -translate-x-1/2 absolute bottom-20  mb-2 rounded "
            />
            
        </>
    );
}
