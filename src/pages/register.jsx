import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Mobisoft-Innovation Accelerator</title>
      </Head>
      <Header/>
      <AuthLayout>
       <div>
       Call an Expert <a href="tel:0719222402"><i class="fas fa-phone"></i><span className='text-blue-600'>+26371 922 2402</span></a>
       </div>
        <h2 className="text-lg mt-6 font-semibold text-gray-900">
            Request a meeting
            </h2>
        <form
          action="#"
          className="mt-4 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 "
        >
          <TextField
            label="Full name"
            id="first_name"
            name="first_name"
            placeholder='John Doe'
            type="text"
            autoComplete="given-name"
            required
          />
          {/* <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          /> */}
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            placeholder='xyz@gmail.com'
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          
          <SelectField
            className="col-span-full"
            label="Service you want"
            id="referral_source"
            name="referral_source"
          >
            <option>Mobile App development</option>
            <option>USSD development</option>
            <option>WhatsApp ChatBot</option>
            <option>Web App</option>
            <option>Consultation</option>
          </SelectField>
          <textarea type='textarea'label='Agenda' cols="120" rows="3" className='border rounded-md' placeholder='*What is your agenda?' type='textbox'></textarea>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Send Enquiry <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
