import React from 'react';
import { Phone, Mail, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Maxamed Yasin",
    role: "Gudoomiye",
    contacts: [
      { type: "linkedin", url: "https://www.linkedin.com/in/mfaratoon/", icon: Linkedin },
      { type: "facebook", url: "https://www.facebook.com/Mfaratoon1", icon: Facebook },
      { type: "whatsapp", url: "https://wa.me/1236888-8391", icon: MessageSquare },
      { type: "phone", value: "1236888-8391", icon: Phone }
    ]
  },
  {
    name: "Yahye Abdirahman",
    role: "Madaxa Maamulka Farsamada",
    contacts: [
      { type: "facebook", url: "https://www.facebook.com/fikrad0", icon: Facebook },
      { type: "whatsapp", url: "https://wa.me/251984858498", icon: MessageSquare },
      { type: "phone", value: "251984858498", icon: Phone }
    ]
  },
  {
    name: "Cabdi Qaadir Uukow",
    role: "Madaxa Biilasha iyo Maaliyada",
    contacts: [
      { type: "facebook", url: "https://www.facebook.com/Uukow2017", icon: Facebook },
      { type: "whatsapp", url: "https://wa.me/252617119990", icon: MessageSquare },
      { type: "phone", value: "252617119990", icon: Phone }
    ]
  }
];

const companyInfo = {
  name: "Somali-TECNO AI",
  website: "soomalibooks.com"
};

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Xidhidhka Asaasayaasha Shirkada</h2>
          <p className="text-blue-200">La xiriir kooxda hogaamineysa {companyInfo.name}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-300 text-sm mb-4">{member.role}</p>
              
              <div className="space-y-3">
                {member.contacts.map((contact, contactIndex) => (
                  <motion.a
                    key={contactIndex}
                    href={contact.type !== 'phone' ? contact.url : `tel:${contact.value}`}
                    target={contact.type !== 'phone' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <contact.icon className="h-5 w-5" />
                    <span className="text-sm">
                      {contact.type === 'whatsapp' ? 'WhatsApp' :
                       contact.type === 'phone' ? contact.value :
                       contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Macluumaadka Shirkada</h3>
          <div className="space-y-2">
            <p className="text-blue-200">
              <span className="font-medium">Magaca:</span> {companyInfo.name}
            </p>
            <a
              href={`https://${companyInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {companyInfo.website}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}