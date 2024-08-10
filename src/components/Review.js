import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Cards.module.scss';

function Review() {
  const sections = [
    {
      title: 'Dashboard Overview',
      description: "Get a quick glance at your farm's overall performance, including sales, inventory, and productivity metrics.",
      imageSrc: '/agrikeep/dashboard.png',
      altText: 'Agrikeep Dashboard Overview',
    },
    {
      title: 'Sales Insights',
      description: 'Analyze your sales data with detailed charts and graphs to make informed decisions for your farm.',
      imageSrc: '/agrikeep/Sales.png',
      altText: 'Agrikeep Sales Insights',
    },
    {
      title: 'Inventory Management',
      description: 'Keep track of your inventory levels, receive notifications for low stock, and manage your products efficiently.',
      imageSrc: '/agrikeep/inventory.png',
      altText: 'Agrikeep Inventory Management',
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {sections.map((section, index) => (
          <div key={index} className="col-md-4 d-flex flex-column align-items-center">
            <Image
              src={section.imageSrc}
              alt={section.altText}
              className="rounded-[1pc] object-cover shadow-lg mb-3"
              width={300}
              height={200}
            />
            <h3 className="text-center">{section.title}</h3>
            <p className="text-center text-gray-700">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
