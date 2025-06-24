import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import { Tailwind } from "@react-email/tailwind";
  import * as React from "react";
  
  interface NetlifyWelcomeEmailProps {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    subject?: string;
  }
  
  const baseUrl = `https://${process.env.NEXT_PUBLIC_URL}`;
  
  const PropDefaults: NetlifyWelcomeEmailProps = {
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  };
  
  export const Email = ({
    name = PropDefaults.name,
    email = PropDefaults.email,
    phone = PropDefaults.phone,
    message = PropDefaults.message,
    subject = PropDefaults.subject
  }: NetlifyWelcomeEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>{name || email as string} Sent You A Message</Preview>
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  brand: "#EFF6FF",
                  offwhite: "#EFF6FF",
                },
                spacing: {
                  0: "0px",
                  20: "20px",
                  45: "45px",
                },
              },
            },
          }}
        >
          <Body className="bg-offwhite text-base font-sans">
            <Img
              src={`${baseUrl}/gsdognh_logo.png`}
              width="200"
              height="200"
              alt={process.env.NEXT_PUBLIC_BRAND}
              className="mx-auto my-20 rounded-full"
            />
            <Container className="bg-white p-45">
              <Section>
                <Row>
                  <Text className="text-base">
                    You got a message!
                  </Text>
  
                  <Text className="text-base"><strong>Name: </strong> {name}</Text>
                  <Text className="text-base"><strong>Email: </strong> {email}</Text>
                  <Text className="text-base"><strong>Phone: </strong> {phone}</Text>
                  <Text className="text-base"><strong>Subject: </strong> {subject}</Text>
                  <Text className="text-base"><strong>Message: </strong> {message}</Text>
                </Row>
              </Section>
            </Container>
  
            <Container className="mt-20">
              <Text className="text-center text-gray-400 mb-45">
                &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BRAND}
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default Email;