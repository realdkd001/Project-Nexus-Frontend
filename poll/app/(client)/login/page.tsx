import React from 'react'
import { LoginContainer, LoginContent, LoginHead, LoginForm, LoginFooter } from './components'

function page() {
    return (
        <div className="relative min-h-svh  flex w-full justify-center items-center flex-col"
        >
            <LoginContainer>
                <LoginContent>
                    <LoginHead />
                    <LoginForm />
                    <LoginFooter />
                </LoginContent>
            </LoginContainer>
        </div>
    )
}

export default page