import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <section id='contact' className='py-20 backdrop-blur-lg backdrop-brightness-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Contact Me</h2>
        <div className='max-w-md mx-auto'>
          <form
            action='https://api.web3forms.com/submit'
            method='POST'
            className='space-y-4'>
            <input
              type='hidden'
              name='access_key'
              value='36fb9950-6770-4ad1-b4fa-ce3b86213a0f'
              aria-hidden='true'
            />
            <input
              type='hidden'
              name='subject'
              value='Portfolio visitor message'></input>
            <input
              type='hidden'
              name='from_name'
              value='Portfolio visitor'></input>

            <Input
              name='name'
              type='text'
              placeholder='Your Name'
              required
              minLength={2}
              maxLength={50}
              pattern='[A-Za-z\s]+'
              title='Please enter a valid name (letters and spaces only)'
              autoComplete='name'
            />
            <Input
              name='email'
              type='email'
              placeholder='Your Email'
              required
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              title='Please enter a valid email address'
              autoComplete='email'
            />
            <Textarea
              name='message'
              placeholder='Your Message'
              required
              minLength={10}
              maxLength={500}
              rows={4}
              autoComplete='off'
            />
            <Button
              type='submit'
              className='w-full transition-transform duration-300 hover:scale-105'
              aria-label='Send message'>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
