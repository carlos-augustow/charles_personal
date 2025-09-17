import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import ProcessPreviewSection from '@/components/sections/ProcessPreviewSection'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseSection />
      <ProcessPreviewSection />
    </Layout>
  )
}