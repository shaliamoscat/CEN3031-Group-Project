
import { getkindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation'
// by default nextjs -> server side components
const Page = () => {
    // get the current login session
    const { getUser } = getKindeServerSession();
    // can get user properties
    const user = getUser();
    if (!user || !user.id) 
        redirect('/auth-callback?origin=dashboard');
    

  return <div>{user.email}</div>;
};

export default Page;
