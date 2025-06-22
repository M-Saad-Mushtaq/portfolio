
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      await emailjs.send(
        'service_c9xkhjg',
        'template_gcaxwhd',
        formData,
        'a4v0byk6Hf56onK3I'
      );
  
      console.log('Email sent successfully!');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
  
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 bg-blue-50 dark:bg-blue-900/30">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:chsaad973@gmail.com" className="text-muted-foreground hover:text-blue-600 transition-colors">
                      chsaad973@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 bg-green-50 dark:bg-green-900/30">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+923421184350" className="text-muted-foreground hover:text-green-600 transition-colors">
                      +92 3421184350
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 bg-purple-50 dark:bg-purple-900/30">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Lahore, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 bg-blue-50 dark:bg-blue-900/30">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/m-saad-mushtaq" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/m-saad-mushtaq
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h4 className="font-semibold mb-4">Available for:</h4>
              <ul className="space-y-2">
                {[
                  'Full-time opportunities',
                  'Freelance projects',
                  'Technical consulting',
                  'Code reviews & mentoring',
                  'Speaking engagements'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-green-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-600 font-medium">Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-background/50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-background/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-background/50"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-background/50 resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-card px-6 py-4 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
