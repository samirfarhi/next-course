import React from 'react'
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="text-3xl font-bold">Hello {name}</Text>
            <Link href="https://codewidthmosh.com">www.codewithmossh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
