"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Facebook } from "lucide-react"
import { performSend } from "../../service/mailService";
import { useForm } from 'react-hook-form';

import { useState, useEffect, useRef } from "react"

// Add grecaptcha type to global
interface Grecaptcha {
    execute(siteKey: string, options: { action: string }): Promise<string>;
    ready(cb: () => void): void;
}
declare global {
    interface Window {
        grecaptcha?: Grecaptcha;
    }
}

export default function ContactPage() {
    const { register, getValues, reset } = useForm();


    const [successVisible, setSuccessVisible] = useState(false);
    const [errorVisible, setErrorVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const recaptchaReady = useRef(false);

    // Load reCAPTCHA script
    useEffect(() => {
        const grecaptcha = (globalThis as { grecaptcha?: Grecaptcha }).grecaptcha;
        if (!grecaptcha && recaptchaSiteKey) {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
            script.async = true;
            script.onload = () => {
                recaptchaReady.current = true;
            };
            document.body.appendChild(script);
        } else {
            recaptchaReady.current = true;
        }
    }, [recaptchaSiteKey]);

    async function onSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();

        const grecaptcha = (globalThis as { grecaptcha?: Grecaptcha }).grecaptcha;
        if (!recaptchaSiteKey || !grecaptcha) {
            setErrorVisible(true);

            return;
        }

        setLoading(true);
        try {
            // Get reCAPTCHA token
            const token = await grecaptcha.execute(recaptchaSiteKey, { action: 'submit' });
            const postdata = {
                ...getValues(),
                recaptchaToken: token
            };
            const response = await performSend(postdata);
            setLoading(false);
            if (response.error) {
                setErrorVisible(true);
            } else {
                setSuccessVisible(true);
                reset();
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
            setErrorVisible(true);
        }
    }

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="text-white py-16 relative">
                <div className="absolute inset-0 chrome-gradient opacity-80" />
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
                        <p className="text-xl text-chrome-200 max-w-3xl mx-auto">
                            Get in touch with the German Shepherd Dog Club of Greater New Haven. We&apos;re here to help with any questions
                            about our club, events, or German Shepherds.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">Name *</Label>
                                        <Input id="name" {...register('name')} placeholder="Enter your first name" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input id="email" {...register('email')} type="email" placeholder="Enter your email address" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" {...register('phone')} type="tel" placeholder="Enter your phone number" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input id="subject" {...register('subject')} placeholder="What is this regarding?" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            {...register('message')}
                                            placeholder="Please provide details about your inquiry..."
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </div>

                                    {successVisible &&
                                        <div className="mt-3 bg-green-100 flex border-green-400 border-t-4 text-green-700 px-4 py-3 rounded relative" role="alert">
                                            <span className="block sm:inline"><svg className="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></span>

                                            <div className="pr-2"><strong className="font-bold">Thank you!&nbsp;</strong><span className="block sm:inline">We will get back to you soon.</span></div>
                                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setSuccessVisible(false)}>
                                                <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                            </span>
                                        </div>
                                    }

                                    {errorVisible &&
                                        <div className="mt-3 bg-red-100 flex border-red-400 border-t-4 text-red-700 px-4 py-3 rounded relative" role="alert">
                                            <span className="block sm:inline"><svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></span>

                                            <div><strong className="font-bold">Something went wrong.&nbsp;</strong> <span className="block sm:inline">Please reach out to us at {process.env.NEXT_PUBLIC_TO_EMAIL}</span></div>
                                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setErrorVisible(false)}>
                                                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                            </span>
                                        </div>
                                    }
                                    {!loading ?
                                        <Button size="lg" onClick={onSubmit} type="submit" variant="secondary" className="bg-chrome-400 text-black hover:bg-chrome-300">
                                            Send Message
                                        </Button>
                                        :
                                        <div role="status">
                                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    }
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Mail className="h-5 w-5 text-chrome-600" />
                                        <span>Email</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <a className="text-gray-600" href="mailto:CherLynGSD@gmail.com">CherLynGSD@gmail.com</a>
                                    <p className="text-sm text-gray-500 mt-2">We typically respond to emails within 24-48 hours.</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Phone className="h-5 w-5 text-chrome-600" />
                                        <span>Phone</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <a href="tel:203-395-8473" className="text-gray-600">203-395-8GSD (473)</a>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Please leave a voicemail if we don&apos;t answer - we&apos;ll call you back!
                                    </p>
                                </CardContent>
                            </Card>

                            {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Meeting Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Community Center
                    <br />
                    123 Main Street
                    <br />
                    New Haven, CT 06511
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Monthly meetings are held here on the third Thursday of each month.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Meeting Times</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Third Thursday of each month
                    <br />
                    7:00 PM - 9:00 PM
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Check our monthly meetings page for specific dates and topics.
                  </p>
                </CardContent>
              </Card> */}

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Facebook className="h-5 w-5 text-chrome-600" />
                                        <span>Social Media</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Follow us on Facebook for updates and photos</p>
                                    <a
                                        href="https://www.facebook.com/TGSDCONH"
                                        className="inline-block mt-3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="outline"
                                            className="border-gray-400 text-chrome-600 hover:bg-gray-400 hover:text-black font-semibold px-8 py-3 bg-transparent z-10"
                                        >
                                            Visit Our Facebook Page
                                        </Button>
                                    </a>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
