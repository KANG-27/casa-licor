import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWork from "@/components/how-it-works/HowItWorks";
import MembershipPlans from "@/components/membership/MembershipPlans";


export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <HowItWork/>
      <MembershipPlans/>

    </main>
  );
}