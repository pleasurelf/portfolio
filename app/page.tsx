import Hero from "@/components/hero";
import HomeProjects from "@/components/home-projects";
import HomeAbout from "@/components/home-about";
import HomeContact from "@/components/home-contact";

export default function Home() {
  return (
    <div className="text-zinc-900 dark:text-zinc-100">
      <main>
        <Hero />
        <HomeProjects />
        <HomeAbout />
        <HomeContact />
      </main>
    </div>
  );
}
