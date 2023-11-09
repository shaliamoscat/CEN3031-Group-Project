import Heading from '@/components/Heading';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";

export default function LoginPage() {
    return (
        <>
            <Heading> LOGIN </Heading>
        
            <LoginLink>Sign in</LoginLink>

            <RegisterLink>Sign up</RegisterLink>
        </>
    );
}
