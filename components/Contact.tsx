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
            <Input
              type='text'
              placeholder='Your Name'
              required
              minLength={2}
              maxLength={50}
              pattern='[A-Za-z\s]+'
              title='Please enter a valid name (letters and spaces only)'
            />
            <Input
              type='email'
              placeholder='Your Email'
              required
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              title='Please enter a valid email address'
            />
            <Textarea
              placeholder='Your Message'
              required
              minLength={10}
              maxLength={500}
              rows={4}
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
