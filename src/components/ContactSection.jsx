import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone, Send } from 'lucide-react'
import { cn } from '../lib/utils'
import React, { useState } from 'react'
import { useToast } from '../hooks/use-toast'
import emailjs from 'emailjs-com';

const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting , setIsSubmitting] = useState(false);
    const [formData , setFormData] = useState({
        name:"",
        email:"",
        message:""
    });
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
      
        emailjs.send(
          'service_vma9yuo',
          'template_ffrjsqm',
          formData,
          '8rdvAjXpoLrq6dZUc'
        ).then(() => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        }).catch((error) => {
          console.error("Email sending error:", error);
          toast({
            title: "Error",
            description: "There was a problem sending your message.",
          });
          setIsSubmitting(false);
        });
      };
  return (
    <section id='contact' className='py-16 px-4 sm:px-6 lg:px-12 xl:px-24 bg-secondary/30'>
  <div className='max-w-7xl mx-auto'>
    <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
      Get In <span className='text-primary'>Touch</span>
    </h2>
    <p className='text-center text-muted-foreground mb-10 max-w-2xl mx-auto'>
      Have a project in mind or want to collaborate? Feel free to reach out.
      I'm always open to discussing new opportunities.
    </p>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      {/* Contact Info */}
      <div className='space-y-8'>
        <h3 className='text-2xl font-semibold mb-4'>Contact Information</h3>
        <div className='space-y-6'>
          <div className='flex items-start space-x-4'>
            <div className='p-3 rounded-full bg-primary/10'>
              <Mail className='h-6 w-6 text-primary' />
            </div>
            <div>
              <h4 className='font-medium'>Email</h4>
              <a href='mailto:rahulramachandran978@gmail.com' className='text-muted-foreground hover:text-primary'>
                rahulramachandran978@gmail.com
              </a>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='p-3 rounded-full bg-primary/10'>
              <Phone className='h-6 w-6 text-primary' />
            </div>
            <div>
              <h4 className='font-medium'>Phone</h4>
              <a href='tel:+919074097239' className='text-muted-foreground hover:text-primary'>
                +91 90740 97239
              </a>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='p-3 rounded-full bg-primary/10'>
              <MapPin className='h-6 w-6 text-primary' />
            </div>
            <div>
              <h4 className='font-medium'>Location</h4>
              <span className='text-muted-foreground'>Palakkad, Kerala</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className='pt-8'>
          <h4 className='font-medium flex items-start mb-4'>Connect With Me</h4>
          <div className='flex space-x-4'>
            <a href='#' target='_blank'><Linkedin /></a>
            <a href='#' target='_blank'><Instagram /></a>
            <a href='#' target='_blank'><Facebook /></a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className='bg-card p-6 sm:p-8 rounded-lg shadow-md'>
        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='block text-sm font-medium mb-1'>Your Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary'
              placeholder='Enter your name'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>Your Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary'
              placeholder='Enter your email'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium mb-1'>Your Message</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none'
              placeholder='Enter your message'
              rows={5}
            />
          </div>
          <button
            type='submit'
            disabled={isSubmitting}
            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default ContactSection
