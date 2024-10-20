import {Hero} from '@/components/Sections/hero';
import {About} from '@/components/Sections/about';
import {Contact} from  '@/components/Sections/contact';
import {Projects} from  '@/components/Sections/projects';
import {Skills} from  '@/components/Sections/skills';
import {MyTimeline} from  '@/components/Sections/timeline';


export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MyTimeline />
        <Contact />
    </div>
  );
}
