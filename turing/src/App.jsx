import promo1 from './assets/promo1.svg';
import promo2 from './assets/promo2.svg';
import promo3 from './assets/promo3.svg';
import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Headline from './components/Headline';
import Stats from './components/Stats';
import WorldStats from './components/WorldStats';

const App = () => {
  return (
    <>
      <Header />

      <Hero />

      <Banner />

      {/* Promo 1 */}
      <section className='py-16'>
        <div className='container grid grid-cols-2 gap-32 items-center justify-center'>
          <div className='order-2'>
            <img src={promo1} alt='promo1' />
          </div>
          <div>
            <p className='text-sm uppercase font-bold text-[#737373]'>For businesses</p>
            <h3 className='text-3xl font-medium mt-2 mb-4'>
              Hire faster with the world&rsquo;s most deeply vetted developers and teams, matched by
              AI
            </h3>
            <p className='text-lg mb-8'>
              Quickly and efficiently build your engineering team with our deeply vetted talent.
            </p>
            <div className='flex gap-4'>
              <Button size='large'>Hire Developers</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo 2 */}
      <section className='py-16 bg-[#f8f8f8]'>
        <div className='container grid grid-cols-2 gap-32 items-center justify-center'>
          <div>
            <img src={promo2} alt='promo2' />
            <div className='bg-black'></div>
          </div>
          <div>
            <p className='text-sm uppercase font-bold text-[#737373]'>For businesses</p>
            <h3 className='text-3xl font-medium mt-2 mb-4'>
              Implement faster with custom software engineering
            </h3>
            <p className='text-lg mb-8'>
              Use our unique combination of expert consultants, engineering talent, and
              AI-accelerated delivery for faster project completion.
            </p>
            <div className='flex gap-4 mb-8'>
              <Button size='large'>More about Custom Engineering</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo 3 */}
      <section className='py-16'>
        <div className='container grid grid-cols-2 gap-32 items-center justify-center'>
          <div className='order-2'>
            <img src={promo3} alt='promo3' />
          </div>
          <div>
            <p className='text-sm uppercase font-bold text-[#737373]'>For developers</p>
            <h3 className='text-3xl font-medium mt-2 mb-4'>
              Get AI-matched to high-paying U.S. tech jobs
            </h3>
            <p className='text-lg mb-8'>
              Once you pass our vetting process, you’ll enjoy opportunities with top clients who
              need your expert skills.
            </p>
            <div className='flex gap-4'>
              <Button size='large'>Apply for Jobs</Button>
            </div>
          </div>
        </div>
      </section>

      <Headline />

      <Stats />

      <WorldStats />

      {/* Promo 3 */}
      <section className='py-16'>
        <div className='container grid grid-cols-2 gap-32 items-center justify-center'>
          <div className='order-2'>
            <img src={promo3} alt='promo3' />
          </div>
          <div>
            <p className='text-sm uppercase font-bold text-[#737373]'>For developers</p>
            <h3 className='text-3xl font-medium mt-2 mb-4'>
              Get AI-matched to high-paying U.S. tech jobs
            </h3>
            <p className='text-lg mb-8'>
              Once you pass our vetting process, you’ll enjoy opportunities with top clients who
              need your expert skills.
            </p>
            <div className='flex gap-4'>
              <Button size='large'>Apply for Jobs</Button>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'></section>
    </>
  );
};

export default App;
