import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import NodeOverlay from '@/components/NodeOverlay';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';
import Review from '@/components/Review';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <NodeOverlay />

        <Hero 
          title="Agrikeeper: Revolutionizing the Agricultural Supply Chain"
          subtitle="Agrikeeper connects buyers directly with farmers and agricultural companies, eliminating middlemen and enabling a streamlined, cost-effective purchase of high-quality agricultural products."
        />

        <div id={styles.section_features}>
          <h2 className="h2-lg my-lg text-center">Key Differentiators: How Agrikeeper Stands Out</h2>

          <div className="container">
            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`}>
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/agrikeep/cart.png" 
                  alt="Screenshot of Agrikeeper app showing the main interface with agricultural products."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Direct Market Access</h3>
                <p>
                  Agrikeeper provides buyers with direct access to fresh, high-quality agricultural products straight from farmers and agricultural companies. This direct connection not only ensures freshness but also reduces costs by bypassing traditional middlemen.
                </p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`}>
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/agrikeep/Category.png" 
                  alt="Screenshot of Agrikeeper app showing product categories and detailed information."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 my-auto order-md-first text-center text-md-start'>
                <h3>Personalized Expert Recommendations</h3>
                <p>
                  Agrikeeper leverages advanced algorithms and expert insights to offer tailored product recommendations based on users' specific needs and preferences. This personalized approach enhances customer satisfaction and encourages repeat usage.
                </p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`}>
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/agrikeep/buy.png" 
                  alt="Screenshot of Agrikeeper app showing a user adding items to their cart."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Seamless Shopping Experience</h3>
                <p>
                  With Agrikeeper, users can navigate through the app and make purchases with just a few clicks, ensuring a smooth and efficient shopping experience.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div id={styles.section_use_cases}>
          <h2 className="h2-lg my-lg text-center">Ways to Leverage Agrikeeper</h2>
          <div className="container">
            <div className="row">
              <UseCase 
                imagePath="/images/icons/note.svg"
                title="Track your farm activities"
              />
              <UseCase 
                imagePath="/images/icons/chat.svg"
                title="Connect with other farmers"
              />
              <UseCase 
                imagePath="/images/icons/book.svg"
                title="Learn new farming techniques"
              />
              <UseCase 
                imagePath="/images/icons/lecture.svg"
                title="Attend virtual agricultural workshops"
              />
              <UseCase 
                imagePath="/images/icons/team.svg"
                title="Collaborate on community farming projects"
              />
              <UseCase 
                imagePath="/images/icons/podcast.svg"
                title="Listen to agricultural podcasts"
              />
            </div>
          </div>
        </div>

        <div id={styles.section_reviews}>
          <Review />
        </div>

        <div id={styles.section_faq}>
          <h2 className="h2-lg my-lg text-center">FAQs</h2>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              <div className="accordion" id="faq_accordion">
                <FaqItem 
                  itemNum="one"
                  question="How do I start shopping on Agrikeeper?"
                  answer="Download the app, create an account, and start exploring our curated collection of agricultural products. Add items to your cart and proceed to checkout."
                />
                <FaqItem 
                  itemNum="two"
                  question="Can I track my orders?"
                  answer="Yes, Agrikeeper allows you to track your orders in real-time. You'll receive notifications as your order progresses."
                />
                <FaqItem 
                  itemNum="three"
                  question="How do I get expert recommendations?"
                  answer="Agrikeeper offers personalized recommendations based on your farming needs. Simply enter your preferences, and our experts will suggest the best products for you."
                />
                <FaqItem 
                  itemNum="four"
                  question="What payment methods are accepted?"
                  answer="We accept various payment methods including credit/debit cards, mobile payments, and online banking."
                />
                <FaqItem 
                  itemNum="five"
                  question="Can I return or exchange products?"
                  answer="Yes, Agrikeeper offers hassle-free returns and exchanges. You can initiate a return or exchange directly from the app."
                />
                <FaqItem 
                  itemNum="seven"
                  question="Is there a mobile app?"
                  answer="Yes, Agrikeeper is a mobile-first platform designed for convenience. Download the app on iOS and Android."
                />
                <FaqItem 
                  itemNum="eight"
                  question="How can I delete my account and data?"
                  answer={
                    <span>
                      Within the app, you can find a <strong>Delete Account</strong> link under settings which will delete your account and all related data.
                       {/* For full instructions 
                      <Link href="/delete-account">view this page.</Link> */}
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div id={styles.section_wait_list}>
          <h2 className='h2-lg my-lg text-center text-primary'>Grow Your Farm with Agrikeeper</h2>
          <AppLinks />
        </div>
      </main>
    </>
  );
}
