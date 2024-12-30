import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { BotServices } from './components/BotServices';
import { ScheduleBooking } from './components/ScheduleBooking';
import { PaymentMethods } from './components/payment/PaymentMethods';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessengerBot } from './components/messenger/MessengerBot';

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <BotServices />
      <ScheduleBooking />
      <PaymentMethods />
      <Contact />
      <Footer />
      <MessengerBot />
    </div>
  );
}