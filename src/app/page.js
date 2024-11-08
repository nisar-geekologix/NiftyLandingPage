import Faq from '@/components/faq';
import Footerbanner from '@/components/footerbanner';
import FreetrielBanner from '@/components/freetrielBanner';
import Insight from '@/components/insight';
import PricePlan from '@/components/pricePlan';
import Testimonials from '@/components/testimonials';
import Toolcard from '@/components/toolcard';

export default function Home() {
  return (
    <>
     <Insight/>
     <Toolcard/>
     <FreetrielBanner/>
     <Testimonials/>
     <PricePlan/>
     <Faq/>
     <Footerbanner/>
    </>
  );
}
