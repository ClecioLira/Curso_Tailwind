import React from "react";

const contacts = [
  { name: "Hotel A", email: "contato@contatoa.com", phone: "(11) 1234-5678" },
  { name: "Hotel B", email: "contato@contatob.com", phone: "(21) 8765-4321" },
  { name: "Hotel C", email: "contato@contatoc.com", phone: "(31) 4567-8910" },
  { name: "Hotel D", email: "contato@contatod.com", phone: "(41) 4567-8910" },
];

const App = () => {
  return (
    <div className="bg-gray-100">
      <div className="md:max-w-3xl mx-auto p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Contatos de Hotéis
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-bold">{contact.name}</h2>
                <p>
                  Email:{" "}
                  <a href={`mailto:${contact.email}`} className="text-blue-600">
                    {contact.email}
                  </a>
                </p>
                <p>Telefone: {contact.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
