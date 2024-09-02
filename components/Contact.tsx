'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <section id='contact' className='py-20 bg-muted'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Contact Me</h2>
        <div className='max-w-md mx-auto'>
          <form onSubmit={(e) => e.preventDefault()} className='space-y-4'>
            <Input type='text' placeholder='Your Name' required />
            <Input type='email' placeholder='Your Email' required />
            <Textarea placeholder='Your Message' required />
            <Button
              type='submit'
              className='w-full transition-transform duration-300 hover:scale-105'>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
